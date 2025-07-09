import json

from sympy.logic.boolalg import truth_table, ibin

from questionpy import Attempt, Question

from .form import MyModel
from .formula import generate_formula_string, parse_string_to_sympy

def get_result_input_name(row: int) -> str:
    return f"result-{row}"


class ExampleAttempt(Attempt):
    def _init_attempt(self) -> None:
        self.expression_string = self.get_expression()
        self.expression_sympy = parse_string_to_sympy(self.expression_string)
        self.variables = list(sorted(self.expression_sympy.free_symbols, key=str))
        self.variable_count = len(self.variables)
        self.rows = 2 ** self.variable_count

        self.solution: list[bool] = list(truth_table(self.expression_sympy, self.variables, input=False))

        self.call_js("main.js", "init", [self.question.options.display_format.name, self.rows])
        self.use_css("styles.css")

        # Functions used inside Jinja templates.
        bits = list(ibin(self.variable_count, bits='all', str=True))
        self.get_current_bit = lambda row, col: bits[row][col]
        self.get_correct_response = lambda row: "1" if self.solution[row] else "0"

        self.jinja2.globals.update({
            "get_current_bit": self.get_current_bit,
            "get_correct_response": self.get_correct_response,
            "get_result_input_name": get_result_input_name,
        })

    def get_intermediates(self) -> dict:
        if self.response is None or not (data := self.response.get("data")):
            return {}

        intermediate_formulas = data.get("intermediate-formulas", {})
        intermediate_results = data.get("intermediate-results", {})

        intermediates = {}
        for formula_id, formula in intermediate_formulas.items():
            if not formula:
                continue
            expression = parse_string_to_sympy(formula)
            result: list[None | bool] = [None for _ in range(self.rows)]
            for index, intermediate_result in enumerate(intermediate_results[formula_id]):
                if intermediate_result:
                    result[index] = intermediate_result == "1"
            intermediates[expression] = result
        return intermediates

    def _compute_score(self) -> float:
        results: list[None | bool] = [None for _ in range(self.rows)]

        for row in range(self.rows):
            input_name = get_result_input_name(row)
            result = self.response.get(input_name)
            if result:
                results[row] = result == "1"

        score = 0
        for solution, result in zip(self.solution, results):
            if solution == result:
                score += 1

        return score / self.rows

    def get_expression(self):
        return generate_formula_string() if self.question.options.generate_formula else self.question.options.custom_formula.formula

    @property
    def formulation(self) -> str:
        context = {
            "formula": self.expression_string,
            "variables": self.variables,
            "rows": self.rows,
            "cols": self.variable_count,
        }

        return self.jinja2.get_template("formulation.xhtml.j2").render(context)


class ExampleQuestion(Question):
    attempt_class = ExampleAttempt

    options: MyModel
