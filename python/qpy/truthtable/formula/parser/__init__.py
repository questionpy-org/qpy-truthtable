from typing import Any

from antlr4 import CommonTokenStream, InputStream
from antlr4.error.ErrorListener import ErrorListener
from sympy import Symbol
from sympy.logic.boolalg import And, BooleanTrue, BooleanFalse, Nand, Nor, Not, Or, Xor, Implies, Equivalent

from .generated.BoraLexer import BoraLexer
from .generated.BoraParser import BoraParser
from .generated.BoraVisitor import BoraVisitor


class BoraException(Exception):
    pass


class BoraVisitorImplementation(BoraVisitor):
    def visitAndOperator(self, ctx: BoraParser.AndOperatorContext) -> And:
        return And(self.visit(ctx.expr(0)), self.visit(ctx.expr(1)))

    def visitOrOperator(self, ctx: BoraParser.OrOperatorContext) -> Or:
        return Or(self.visit(ctx.expr(0)), self.visit(ctx.expr(1)))

    def visitNotOperator(self, ctx: BoraParser.NotOperatorContext) -> Not:
        return Not(self.visit(ctx.factor()))

    def visitNorOperator(self, ctx: BoraParser.NorOperatorContext) -> Nor:
        return Nor(self.visit(ctx.expr(0)), self.visit(ctx.expr(1)))

    def visitNandOperator(self, ctx: BoraParser.NorOperatorContext) -> Nand:
        return Nand(self.visit(ctx.expr(0)), self.visit(ctx.expr(1)))

    def visitXorOperator(self, ctx: BoraParser.XorOperatorContext) -> Xor:
        return Xor(self.visit(ctx.expr(0)), self.visit(ctx.expr(1)))

    def visitXnorOperator(self, ctx: BoraParser.XnorOperatorContext) -> Equivalent:
        return Equivalent(self.visit(ctx.expr(0)), self.visit(ctx.expr(1)))

    def visitImpliesOperator(self, ctx: BoraParser.ImpliesOperatorContext) -> Implies:
        return Implies(self.visit(ctx.expr(0)), self.visit(ctx.expr(1)))

    def visitImplicitAndOperator(self, ctx: BoraParser.ImplicitAndOperatorContext):
        return And(self.visit(ctx.term(0)), self.visit(ctx.term(1)))

    def visitVariable(self, ctx: BoraParser.VariableContext) -> Symbol:
        return Symbol(ctx.VARIABLE().getText())

    def visitGroupFactor(self, ctx: BoraParser.GroupFactorContext) -> Any:
        return self.visit(ctx.expr())

    def visitLiteralTrue(self, ctx: BoraParser.LiteralTrueContext) -> BooleanTrue:
        return BooleanTrue()

    def visitLiteralFalse(self, ctx: BoraParser.LiteralFalseContext) -> BooleanFalse:
        return BooleanFalse()

    def visitProg(self, ctx: BoraParser.ProgContext) -> Any:
        return self.visit(ctx.expr())


class BoraErrorListener(ErrorListener):
    def syntaxError(self, _recognizer, _offending_symbol, _line, _column, msg, _e):
        raise BoraException(f"Syntax error: {msg}")


def parse_string_to_sympy(formula: str) -> Any:
    stream = InputStream(formula)
    lexer = BoraLexer(stream)
    lexer.removeErrorListeners()
    lexer.addErrorListener(BoraErrorListener())

    tokens = CommonTokenStream(lexer)
    parser = BoraParser(tokens)
    parser.removeErrorListeners()
    parser.addErrorListener(BoraErrorListener())

    visitor = BoraVisitorImplementation()
    tree = parser.prog()

    return visitor.visit(tree)
