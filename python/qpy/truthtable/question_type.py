from sympy.logic.boolalg import truth_table, ibin

from questionpy import Attempt, Question

from .form import MyModel
from .formula import generate_formula_string, parse_string_to_sympy


class ExampleAttempt(Attempt):
    def _init_attempt(self) -> None:
        self.call_js("main.js", "init", [self.question.options.display_format.name])

        self.expression_string = self.get_expression()
        self.expression_sympy = parse_string_to_sympy(self.expression_string)
        self.variables = list(sorted(self.expression_sympy.free_symbols, key=str))
        self.results = list(truth_table(self.expression_sympy, self.variables, input=False))
        self.rows = 2 ** len(self.variables)

        # Functions used inside Jinja templates.
        bits = list(ibin(len(self.variables), bits='all', str=True))
        self.get_current_bit = lambda row, col: bits[row][col]
        self.get_correct_response = lambda row: "1" if self.results[row] else "0"
        self.jinja2.globals.update({
            "get_current_bit": self.get_current_bit,
            "get_correct_response": self.get_correct_response,
        })

    def _compute_score(self) -> float:
        result = [None for _ in range(self.rows)]
        for row in range(self.rows):
            result_row = self.response.get(f"result_row_{row}")
            if result_row:
                result[row] = result_row == "1"

        score = 0
        for row, row_result in zip(self.results, result):
            if row_result == row:
                score += 1

        return score / self.rows if score else 0

    def get_expression(self):
        return generate_formula_string() if self.question.options.generate_formula else self.question.options.custom_formula.formula

    @property
    def formulation(self) -> str:
        context = {
            "formula": self.expression_string,
            "variables": self.variables,
            "rows": self.rows,
            "cols": len(self.variables),
        }

        return self.jinja2.get_template("formulation.xhtml.j2").render(context)


class ExampleQuestion(Question):
    attempt_class = ExampleAttempt

    options: MyModel
