# Generated from Bora.g4 by ANTLR 4.13.2
# encoding: utf-8
from antlr4 import *
from io import StringIO
import sys
if sys.version_info[1] > 5:
	from typing import TextIO
else:
	from typing.io import TextIO

def serializedATN():
    return [
        4,1,14,62,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,3,0,10,8,0,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,5,1,36,8,1,10,1,12,1,39,9,1,1,2,1,2,1,2,
        1,2,1,2,5,2,46,8,2,10,2,12,2,49,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
        1,3,1,3,3,3,60,8,3,1,3,0,2,2,4,4,0,2,4,6,0,0,70,0,9,1,0,0,0,2,11,
        1,0,0,0,4,40,1,0,0,0,6,59,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,9,10,
        1,0,0,0,10,1,1,0,0,0,11,12,6,1,-1,0,12,13,3,4,2,0,13,37,1,0,0,0,
        14,15,10,8,0,0,15,16,5,4,0,0,16,36,3,2,1,9,17,18,10,7,0,0,18,19,
        5,8,0,0,19,36,3,2,1,8,20,21,10,6,0,0,21,22,5,5,0,0,22,36,3,2,1,7,
        23,24,10,5,0,0,24,25,5,7,0,0,25,36,3,2,1,6,26,27,10,4,0,0,27,28,
        5,9,0,0,28,36,3,2,1,5,29,30,10,3,0,0,30,31,5,11,0,0,31,36,3,2,1,
        4,32,33,10,2,0,0,33,34,5,10,0,0,34,36,3,2,1,3,35,14,1,0,0,0,35,17,
        1,0,0,0,35,20,1,0,0,0,35,23,1,0,0,0,35,26,1,0,0,0,35,29,1,0,0,0,
        35,32,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,3,1,0,
        0,0,39,37,1,0,0,0,40,41,6,2,-1,0,41,42,3,6,3,0,42,47,1,0,0,0,43,
        44,10,1,0,0,44,46,3,4,2,2,45,43,1,0,0,0,46,49,1,0,0,0,47,45,1,0,
        0,0,47,48,1,0,0,0,48,5,1,0,0,0,49,47,1,0,0,0,50,51,5,6,0,0,51,60,
        3,6,3,0,52,60,5,3,0,0,53,60,5,12,0,0,54,60,5,13,0,0,55,56,5,1,0,
        0,56,57,3,2,1,0,57,58,5,2,0,0,58,60,1,0,0,0,59,50,1,0,0,0,59,52,
        1,0,0,0,59,53,1,0,0,0,59,54,1,0,0,0,59,55,1,0,0,0,60,7,1,0,0,0,5,
        9,35,37,47,59
    ]

class BoraParser ( Parser ):

    grammarFileName = "Bora.g4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ "<INVALID>", "'('", "')'", "<INVALID>", "<INVALID>", 
                     "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                     "<INVALID>", "<INVALID>", "<INVALID>", "'1'", "'0'" ]

    symbolicNames = [ "<INVALID>", "<INVALID>", "<INVALID>", "VARIABLE", 
                      "AND", "OR", "NOT", "NOR", "NAND", "XOR", "XNOR", 
                      "IMPLIES", "TRUE", "FALSE", "WS" ]

    RULE_prog = 0
    RULE_expr = 1
    RULE_term = 2
    RULE_factor = 3

    ruleNames =  [ "prog", "expr", "term", "factor" ]

    EOF = Token.EOF
    T__0=1
    T__1=2
    VARIABLE=3
    AND=4
    OR=5
    NOT=6
    NOR=7
    NAND=8
    XOR=9
    XNOR=10
    IMPLIES=11
    TRUE=12
    FALSE=13
    WS=14

    def __init__(self, input:TokenStream, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.13.2")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None




    class ProgContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def expr(self):
            return self.getTypedRuleContext(BoraParser.ExprContext,0)


        def getRuleIndex(self):
            return BoraParser.RULE_prog

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitProg" ):
                return visitor.visitProg(self)
            else:
                return visitor.visitChildren(self)




    def prog(self):

        localctx = BoraParser.ProgContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_prog)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 9
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            if (((_la) & ~0x3f) == 0 and ((1 << _la) & 12362) != 0):
                self.state = 8
                self.expr(0)


        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ExprContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return BoraParser.RULE_expr

     
        def copyFrom(self, ctx:ParserRuleContext):
            super().copyFrom(ctx)


    class ImpliesOperatorContext(ExprContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.ExprContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(BoraParser.ExprContext)
            else:
                return self.getTypedRuleContext(BoraParser.ExprContext,i)

        def IMPLIES(self):
            return self.getToken(BoraParser.IMPLIES, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitImpliesOperator" ):
                return visitor.visitImpliesOperator(self)
            else:
                return visitor.visitChildren(self)


    class OrOperatorContext(ExprContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.ExprContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(BoraParser.ExprContext)
            else:
                return self.getTypedRuleContext(BoraParser.ExprContext,i)

        def OR(self):
            return self.getToken(BoraParser.OR, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitOrOperator" ):
                return visitor.visitOrOperator(self)
            else:
                return visitor.visitChildren(self)


    class TermExprContext(ExprContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.ExprContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def term(self):
            return self.getTypedRuleContext(BoraParser.TermContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitTermExpr" ):
                return visitor.visitTermExpr(self)
            else:
                return visitor.visitChildren(self)


    class NandOperatorContext(ExprContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.ExprContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(BoraParser.ExprContext)
            else:
                return self.getTypedRuleContext(BoraParser.ExprContext,i)

        def NAND(self):
            return self.getToken(BoraParser.NAND, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitNandOperator" ):
                return visitor.visitNandOperator(self)
            else:
                return visitor.visitChildren(self)


    class XorOperatorContext(ExprContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.ExprContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(BoraParser.ExprContext)
            else:
                return self.getTypedRuleContext(BoraParser.ExprContext,i)

        def XOR(self):
            return self.getToken(BoraParser.XOR, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitXorOperator" ):
                return visitor.visitXorOperator(self)
            else:
                return visitor.visitChildren(self)


    class AndOperatorContext(ExprContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.ExprContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(BoraParser.ExprContext)
            else:
                return self.getTypedRuleContext(BoraParser.ExprContext,i)

        def AND(self):
            return self.getToken(BoraParser.AND, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitAndOperator" ):
                return visitor.visitAndOperator(self)
            else:
                return visitor.visitChildren(self)


    class XnorOperatorContext(ExprContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.ExprContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(BoraParser.ExprContext)
            else:
                return self.getTypedRuleContext(BoraParser.ExprContext,i)

        def XNOR(self):
            return self.getToken(BoraParser.XNOR, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitXnorOperator" ):
                return visitor.visitXnorOperator(self)
            else:
                return visitor.visitChildren(self)


    class NorOperatorContext(ExprContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.ExprContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expr(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(BoraParser.ExprContext)
            else:
                return self.getTypedRuleContext(BoraParser.ExprContext,i)

        def NOR(self):
            return self.getToken(BoraParser.NOR, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitNorOperator" ):
                return visitor.visitNorOperator(self)
            else:
                return visitor.visitChildren(self)



    def expr(self, _p:int=0):
        _parentctx = self._ctx
        _parentState = self.state
        localctx = BoraParser.ExprContext(self, self._ctx, _parentState)
        _prevctx = localctx
        _startState = 2
        self.enterRecursionRule(localctx, 2, self.RULE_expr, _p)
        try:
            self.enterOuterAlt(localctx, 1)
            localctx = BoraParser.TermExprContext(self, localctx)
            self._ctx = localctx
            _prevctx = localctx

            self.state = 12
            self.term(0)
            self._ctx.stop = self._input.LT(-1)
            self.state = 37
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,2,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    self.state = 35
                    self._errHandler.sync(self)
                    la_ = self._interp.adaptivePredict(self._input,1,self._ctx)
                    if la_ == 1:
                        localctx = BoraParser.AndOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 14
                        if not self.precpred(self._ctx, 8):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 8)")
                        self.state = 15
                        self.match(BoraParser.AND)
                        self.state = 16
                        self.expr(9)
                        pass

                    elif la_ == 2:
                        localctx = BoraParser.NandOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 17
                        if not self.precpred(self._ctx, 7):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 7)")
                        self.state = 18
                        self.match(BoraParser.NAND)
                        self.state = 19
                        self.expr(8)
                        pass

                    elif la_ == 3:
                        localctx = BoraParser.OrOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 20
                        if not self.precpred(self._ctx, 6):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 6)")
                        self.state = 21
                        self.match(BoraParser.OR)
                        self.state = 22
                        self.expr(7)
                        pass

                    elif la_ == 4:
                        localctx = BoraParser.NorOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 23
                        if not self.precpred(self._ctx, 5):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 5)")
                        self.state = 24
                        self.match(BoraParser.NOR)
                        self.state = 25
                        self.expr(6)
                        pass

                    elif la_ == 5:
                        localctx = BoraParser.XorOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 26
                        if not self.precpred(self._ctx, 4):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 4)")
                        self.state = 27
                        self.match(BoraParser.XOR)
                        self.state = 28
                        self.expr(5)
                        pass

                    elif la_ == 6:
                        localctx = BoraParser.ImpliesOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 29
                        if not self.precpred(self._ctx, 3):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 3)")
                        self.state = 30
                        self.match(BoraParser.IMPLIES)
                        self.state = 31
                        self.expr(4)
                        pass

                    elif la_ == 7:
                        localctx = BoraParser.XnorOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 32
                        if not self.precpred(self._ctx, 2):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 2)")
                        self.state = 33
                        self.match(BoraParser.XNOR)
                        self.state = 34
                        self.expr(3)
                        pass

             
                self.state = 39
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,2,self._ctx)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.unrollRecursionContexts(_parentctx)
        return localctx


    class TermContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return BoraParser.RULE_term

     
        def copyFrom(self, ctx:ParserRuleContext):
            super().copyFrom(ctx)


    class ImplicitAndOperatorContext(TermContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.TermContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def term(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(BoraParser.TermContext)
            else:
                return self.getTypedRuleContext(BoraParser.TermContext,i)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitImplicitAndOperator" ):
                return visitor.visitImplicitAndOperator(self)
            else:
                return visitor.visitChildren(self)


    class FactorExprContext(TermContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.TermContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def factor(self):
            return self.getTypedRuleContext(BoraParser.FactorContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitFactorExpr" ):
                return visitor.visitFactorExpr(self)
            else:
                return visitor.visitChildren(self)



    def term(self, _p:int=0):
        _parentctx = self._ctx
        _parentState = self.state
        localctx = BoraParser.TermContext(self, self._ctx, _parentState)
        _prevctx = localctx
        _startState = 4
        self.enterRecursionRule(localctx, 4, self.RULE_term, _p)
        try:
            self.enterOuterAlt(localctx, 1)
            localctx = BoraParser.FactorExprContext(self, localctx)
            self._ctx = localctx
            _prevctx = localctx

            self.state = 41
            self.factor()
            self._ctx.stop = self._input.LT(-1)
            self.state = 47
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,3,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    localctx = BoraParser.ImplicitAndOperatorContext(self, BoraParser.TermContext(self, _parentctx, _parentState))
                    self.pushNewRecursionContext(localctx, _startState, self.RULE_term)
                    self.state = 43
                    if not self.precpred(self._ctx, 1):
                        from antlr4.error.Errors import FailedPredicateException
                        raise FailedPredicateException(self, "self.precpred(self._ctx, 1)")
                    self.state = 44
                    self.term(2) 
                self.state = 49
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,3,self._ctx)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.unrollRecursionContexts(_parentctx)
        return localctx


    class FactorContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return BoraParser.RULE_factor

     
        def copyFrom(self, ctx:ParserRuleContext):
            super().copyFrom(ctx)



    class NotOperatorContext(FactorContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.FactorContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def NOT(self):
            return self.getToken(BoraParser.NOT, 0)
        def factor(self):
            return self.getTypedRuleContext(BoraParser.FactorContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitNotOperator" ):
                return visitor.visitNotOperator(self)
            else:
                return visitor.visitChildren(self)


    class LiteralTrueContext(FactorContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.FactorContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def TRUE(self):
            return self.getToken(BoraParser.TRUE, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitLiteralTrue" ):
                return visitor.visitLiteralTrue(self)
            else:
                return visitor.visitChildren(self)


    class VariableContext(FactorContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.FactorContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def VARIABLE(self):
            return self.getToken(BoraParser.VARIABLE, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitVariable" ):
                return visitor.visitVariable(self)
            else:
                return visitor.visitChildren(self)


    class LiteralFalseContext(FactorContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.FactorContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def FALSE(self):
            return self.getToken(BoraParser.FALSE, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitLiteralFalse" ):
                return visitor.visitLiteralFalse(self)
            else:
                return visitor.visitChildren(self)


    class GroupFactorContext(FactorContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.FactorContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expr(self):
            return self.getTypedRuleContext(BoraParser.ExprContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitGroupFactor" ):
                return visitor.visitGroupFactor(self)
            else:
                return visitor.visitChildren(self)



    def factor(self):

        localctx = BoraParser.FactorContext(self, self._ctx, self.state)
        self.enterRule(localctx, 6, self.RULE_factor)
        try:
            self.state = 59
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [6]:
                localctx = BoraParser.NotOperatorContext(self, localctx)
                self.enterOuterAlt(localctx, 1)
                self.state = 50
                self.match(BoraParser.NOT)
                self.state = 51
                self.factor()
                pass
            elif token in [3]:
                localctx = BoraParser.VariableContext(self, localctx)
                self.enterOuterAlt(localctx, 2)
                self.state = 52
                self.match(BoraParser.VARIABLE)
                pass
            elif token in [12]:
                localctx = BoraParser.LiteralTrueContext(self, localctx)
                self.enterOuterAlt(localctx, 3)
                self.state = 53
                self.match(BoraParser.TRUE)
                pass
            elif token in [13]:
                localctx = BoraParser.LiteralFalseContext(self, localctx)
                self.enterOuterAlt(localctx, 4)
                self.state = 54
                self.match(BoraParser.FALSE)
                pass
            elif token in [1]:
                localctx = BoraParser.GroupFactorContext(self, localctx)
                self.enterOuterAlt(localctx, 5)
                self.state = 55
                self.match(BoraParser.T__0)
                self.state = 56
                self.expr(0)
                self.state = 57
                self.match(BoraParser.T__1)
                pass
            else:
                raise NoViableAltException(self)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx



    def sempred(self, localctx:RuleContext, ruleIndex:int, predIndex:int):
        if self._predicates == None:
            self._predicates = dict()
        self._predicates[1] = self.expr_sempred
        self._predicates[2] = self.term_sempred
        pred = self._predicates.get(ruleIndex, None)
        if pred is None:
            raise Exception("No predicate with index:" + str(ruleIndex))
        else:
            return pred(localctx, predIndex)

    def expr_sempred(self, localctx:ExprContext, predIndex:int):
            if predIndex == 0:
                return self.precpred(self._ctx, 8)
         

            if predIndex == 1:
                return self.precpred(self._ctx, 7)
         

            if predIndex == 2:
                return self.precpred(self._ctx, 6)
         

            if predIndex == 3:
                return self.precpred(self._ctx, 5)
         

            if predIndex == 4:
                return self.precpred(self._ctx, 4)
         

            if predIndex == 5:
                return self.precpred(self._ctx, 3)
         

            if predIndex == 6:
                return self.precpred(self._ctx, 2)
         

    def term_sempred(self, localctx:TermContext, predIndex:int):
            if predIndex == 7:
                return self.precpred(self._ctx, 1)
         




