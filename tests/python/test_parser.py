from unittest.mock import patch

import pytest
from sympy import symbols
from sympy.logic.boolalg import false, true, And, Nand, Nor, Not, Or, Xor, Implies, Equivalent

from truthtable.python.qpy.truthtable.formula import parse_string_to_sympy


x, y, z = symbols('x y z')


@pytest.fixture(autouse=True)
def check_eval():
    with patch("builtins.eval") as mock_eval:
        yield
        mock_eval.assert_not_called()


@pytest.mark.parametrize("string_formula, sympy_formula", [
    ("x", x),
    ("1", true),
    ("0", false),
    ("~xy", And(Not(x), y)),
    ("x~y", And(x, Not(y))),
    ("xy+z", Or(And(x, y), z)),
    ("x+yz", Or(x, And(y, z))),
    ("x->y<->z", Equivalent(Implies(x, y), z)),
    ("x<->y->z", Equivalent(x, Implies(y, z))),
    ("xyz", And(And(x, y), z)),
    ("x+y+z", Or(Or(x, y), z)),
    # TODO: right association
    #("x->y->z", Implies(x, Implies(y, z))),
    #("x<->y<->z", Equivalent(x, Equivalent(y, z))),
    ("xy->z", Implies(And(x, y), z)),
    ("x->yz", Implies(x, And(y, z))),
    ("x+y->z", Implies(Or(x, y), z)),
    ("x->y+z", Implies(x, Or(y, z))),
    ("x+y<->z", Equivalent(Or(x, y), z)),
    ("x<->y+z", Equivalent(x, Or(y, z))),
    ("~(xy)", Not(And(x, y))),
    ("x(y+z)", And(x, Or(y, z))),
    ("x->(y<->z)", Implies(x, Equivalent(y, z))),
    ("~~~x", Not(Not(Not(x)))),
    ("10", And(true, false)),
    ("(x+y)(y+z)", And(Or(x, y), Or(y, z))),
])
def test_parser(string_formula, sympy_formula):
    assert parse_string_to_sympy(string_formula) == sympy_formula


def binary_operator_test_cases() -> list[pytest.param]:
    operators = {
        And: ("and", "AND", "*"),
        Nand: ("nand", "NAND"),
        Or: ("or", "OR", "+"),
        Nor: ("nor", "NOR"),
        Xor: ("xor", "XOR"),
        Implies: ("implies", "IMPLIES", "->", "=>"),
        Equivalent: ("xnor", "XNOR", "<=>", "<=>"),
    }

    return [
        pytest.param(string_operator, sympy_operator)
        for sympy_operator, string_operators in operators.items()
        for string_operator in string_operators
    ]


@pytest.mark.parametrize("string_operator, sympy_operator", binary_operator_test_cases())
def test_binary_operators(sympy_operator, string_operator):
    assert parse_string_to_sympy(f"x {string_operator} y") == sympy_operator(x, y)

    with pytest.raises(Exception):
        parse_string_to_sympy(string_operator)

    with pytest.raises(Exception):
        parse_string_to_sympy(f"x {string_operator}")

    with pytest.raises(Exception):
        parse_string_to_sympy(f"{string_operator} x")


@pytest.mark.parametrize("operator", [
    "not", "NOT", "~",
])
def test_not_operator(operator):
    assert parse_string_to_sympy(f"{operator} x") == Not(x)

    with pytest.raises(Exception):
        parse_string_to_sympy(operator)

    with pytest.raises(Exception):
        parse_string_to_sympy(f"x {operator}")
