# Generated from Bora.g4 by ANTLR 4.13.2
from antlr4 import *
if "." in __name__:
    from .BoraParser import BoraParser
else:
    from BoraParser import BoraParser

# This class defines a complete generic visitor for a parse tree produced by BoraParser.

class BoraVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by BoraParser#prog.
    def visitProg(self, ctx:BoraParser.ProgContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#impliesOperator.
    def visitImpliesOperator(self, ctx:BoraParser.ImpliesOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#orOperator.
    def visitOrOperator(self, ctx:BoraParser.OrOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#notOperator.
    def visitNotOperator(self, ctx:BoraParser.NotOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#termExpr.
    def visitTermExpr(self, ctx:BoraParser.TermExprContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#nandOperator.
    def visitNandOperator(self, ctx:BoraParser.NandOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#xorOperator.
    def visitXorOperator(self, ctx:BoraParser.XorOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#andOperator.
    def visitAndOperator(self, ctx:BoraParser.AndOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#xnorOperator.
    def visitXnorOperator(self, ctx:BoraParser.XnorOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#norOperator.
    def visitNorOperator(self, ctx:BoraParser.NorOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#literalTrue.
    def visitLiteralTrue(self, ctx:BoraParser.LiteralTrueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#variable.
    def visitVariable(self, ctx:BoraParser.VariableContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#literalFalse.
    def visitLiteralFalse(self, ctx:BoraParser.LiteralFalseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#implicitVariableAndOperator.
    def visitImplicitVariableAndOperator(self, ctx:BoraParser.ImplicitVariableAndOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#implicitTermAndOperator.
    def visitImplicitTermAndOperator(self, ctx:BoraParser.ImplicitTermAndOperatorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by BoraParser#groupFactor.
    def visitGroupFactor(self, ctx:BoraParser.GroupFactorContext):
        return self.visitChildren(ctx)



del BoraParser