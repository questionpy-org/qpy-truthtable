from questionpy import Attempt, Question

from .form import MyModel
from .formula import generate_formula_string, parse_string_to_sympy


class ExampleAttempt(Attempt):
    def _init_attempt(self) -> None:
        self.call_js("main.js", "init", [self.question.options.display_format.name])

    def _compute_score(self) -> float:
        return 0

    def get_expression(self):
        return generate_formula_string() if self.question.options.generate_formula else self.question.options.custom_formula.formula

    @property
    def formulation(self) -> str:
        expression = self.get_expression()
        parsed = parse_string_to_sympy(expression)
        context = {
            "formula": expression,
            "variables": sorted(map(str, parsed.free_symbols)),
            "rows": 2 ** len(parsed.free_symbols),
        }
        return self.jinja2.get_template("formulation.xhtml.j2").render(context)


class ExampleQuestion(Question):
    attempt_class = ExampleAttempt

    options: MyModel
