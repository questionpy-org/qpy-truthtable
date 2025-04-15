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
        4,1,14,61,2,0,7,0,2,1,7,1,2,2,7,2,1,0,3,0,8,8,0,1,1,1,1,1,1,1,1,
        3,1,14,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,37,8,1,10,1,12,1,40,9,1,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,52,8,2,1,2,1,2,5,2,56,8,2,
        10,2,12,2,59,9,2,1,2,0,2,2,4,3,0,2,4,0,0,71,0,7,1,0,0,0,2,13,1,0,
        0,0,4,51,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,7,8,1,0,0,0,8,1,1,0,0,0,
        9,10,6,1,-1,0,10,11,5,6,0,0,11,14,3,4,2,0,12,14,3,4,2,0,13,9,1,0,
        0,0,13,12,1,0,0,0,14,38,1,0,0,0,15,16,10,9,0,0,16,17,5,4,0,0,17,
        37,3,2,1,10,18,19,10,8,0,0,19,20,5,8,0,0,20,37,3,2,1,9,21,22,10,
        7,0,0,22,23,5,5,0,0,23,37,3,2,1,8,24,25,10,6,0,0,25,26,5,7,0,0,26,
        37,3,2,1,7,27,28,10,5,0,0,28,29,5,9,0,0,29,37,3,2,1,6,30,31,10,4,
        0,0,31,32,5,10,0,0,32,37,3,2,1,5,33,34,10,3,0,0,34,35,5,11,0,0,35,
        37,3,2,1,4,36,15,1,0,0,0,36,18,1,0,0,0,36,21,1,0,0,0,36,24,1,0,0,
        0,36,27,1,0,0,0,36,30,1,0,0,0,36,33,1,0,0,0,37,40,1,0,0,0,38,36,
        1,0,0,0,38,39,1,0,0,0,39,3,1,0,0,0,40,38,1,0,0,0,41,42,6,2,-1,0,
        42,43,5,3,0,0,43,52,3,4,2,6,44,52,5,3,0,0,45,52,5,12,0,0,46,52,5,
        13,0,0,47,48,5,1,0,0,48,49,3,2,1,0,49,50,5,2,0,0,50,52,1,0,0,0,51,
        41,1,0,0,0,51,44,1,0,0,0,51,45,1,0,0,0,51,46,1,0,0,0,51,47,1,0,0,
        0,52,57,1,0,0,0,53,54,10,1,0,0,54,56,3,4,2,2,55,53,1,0,0,0,56,59,
        1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,5,1,0,0,0,59,57,1,0,0,0,6,
        7,13,36,38,51,57
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

    ruleNames =  [ "prog", "expr", "term" ]

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
            self.state = 7
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            if (((_la) & ~0x3f) == 0 and ((1 << _la) & 12362) != 0):
                self.state = 6
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


    class NotOperatorContext(ExprContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.ExprContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def NOT(self):
            return self.getToken(BoraParser.NOT, 0)
        def term(self):
            return self.getTypedRuleContext(BoraParser.TermContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitNotOperator" ):
                return visitor.visitNotOperator(self)
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
            self.state = 13
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [6]:
                localctx = BoraParser.NotOperatorContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx

                self.state = 10
                self.match(BoraParser.NOT)
                self.state = 11
                self.term(0)
                pass
            elif token in [1, 3, 12, 13]:
                localctx = BoraParser.TermExprContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 12
                self.term(0)
                pass
            else:
                raise NoViableAltException(self)

            self._ctx.stop = self._input.LT(-1)
            self.state = 38
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,3,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    self.state = 36
                    self._errHandler.sync(self)
                    la_ = self._interp.adaptivePredict(self._input,2,self._ctx)
                    if la_ == 1:
                        localctx = BoraParser.AndOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 15
                        if not self.precpred(self._ctx, 9):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 9)")
                        self.state = 16
                        self.match(BoraParser.AND)
                        self.state = 17
                        self.expr(10)
                        pass

                    elif la_ == 2:
                        localctx = BoraParser.NandOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 18
                        if not self.precpred(self._ctx, 8):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 8)")
                        self.state = 19
                        self.match(BoraParser.NAND)
                        self.state = 20
                        self.expr(9)
                        pass

                    elif la_ == 3:
                        localctx = BoraParser.OrOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 21
                        if not self.precpred(self._ctx, 7):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 7)")
                        self.state = 22
                        self.match(BoraParser.OR)
                        self.state = 23
                        self.expr(8)
                        pass

                    elif la_ == 4:
                        localctx = BoraParser.NorOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 24
                        if not self.precpred(self._ctx, 6):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 6)")
                        self.state = 25
                        self.match(BoraParser.NOR)
                        self.state = 26
                        self.expr(7)
                        pass

                    elif la_ == 5:
                        localctx = BoraParser.XorOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 27
                        if not self.precpred(self._ctx, 5):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 5)")
                        self.state = 28
                        self.match(BoraParser.XOR)
                        self.state = 29
                        self.expr(6)
                        pass

                    elif la_ == 6:
                        localctx = BoraParser.XnorOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 30
                        if not self.precpred(self._ctx, 4):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 4)")
                        self.state = 31
                        self.match(BoraParser.XNOR)
                        self.state = 32
                        self.expr(5)
                        pass

                    elif la_ == 7:
                        localctx = BoraParser.ImpliesOperatorContext(self, BoraParser.ExprContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expr)
                        self.state = 33
                        if not self.precpred(self._ctx, 3):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 3)")
                        self.state = 34
                        self.match(BoraParser.IMPLIES)
                        self.state = 35
                        self.expr(4)
                        pass

             
                self.state = 40
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,3,self._ctx)

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


    class LiteralTrueContext(TermContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.TermContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def TRUE(self):
            return self.getToken(BoraParser.TRUE, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitLiteralTrue" ):
                return visitor.visitLiteralTrue(self)
            else:
                return visitor.visitChildren(self)


    class VariableContext(TermContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.TermContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def VARIABLE(self):
            return self.getToken(BoraParser.VARIABLE, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitVariable" ):
                return visitor.visitVariable(self)
            else:
                return visitor.visitChildren(self)


    class LiteralFalseContext(TermContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.TermContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def FALSE(self):
            return self.getToken(BoraParser.FALSE, 0)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitLiteralFalse" ):
                return visitor.visitLiteralFalse(self)
            else:
                return visitor.visitChildren(self)


    class ImplicitVariableAndOperatorContext(TermContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.TermContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def VARIABLE(self):
            return self.getToken(BoraParser.VARIABLE, 0)
        def term(self):
            return self.getTypedRuleContext(BoraParser.TermContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitImplicitVariableAndOperator" ):
                return visitor.visitImplicitVariableAndOperator(self)
            else:
                return visitor.visitChildren(self)


    class ImplicitTermAndOperatorContext(TermContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.TermContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def term(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(BoraParser.TermContext)
            else:
                return self.getTypedRuleContext(BoraParser.TermContext,i)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitImplicitTermAndOperator" ):
                return visitor.visitImplicitTermAndOperator(self)
            else:
                return visitor.visitChildren(self)


    class GroupFactorContext(TermContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a BoraParser.TermContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expr(self):
            return self.getTypedRuleContext(BoraParser.ExprContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitGroupFactor" ):
                return visitor.visitGroupFactor(self)
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
            self.state = 51
            self._errHandler.sync(self)
            la_ = self._interp.adaptivePredict(self._input,4,self._ctx)
            if la_ == 1:
                localctx = BoraParser.ImplicitVariableAndOperatorContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx

                self.state = 42
                self.match(BoraParser.VARIABLE)
                self.state = 43
                self.term(6)
                pass

            elif la_ == 2:
                localctx = BoraParser.VariableContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 44
                self.match(BoraParser.VARIABLE)
                pass

            elif la_ == 3:
                localctx = BoraParser.LiteralTrueContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 45
                self.match(BoraParser.TRUE)
                pass

            elif la_ == 4:
                localctx = BoraParser.LiteralFalseContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 46
                self.match(BoraParser.FALSE)
                pass

            elif la_ == 5:
                localctx = BoraParser.GroupFactorContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 47
                self.match(BoraParser.T__0)
                self.state = 48
                self.expr(0)
                self.state = 49
                self.match(BoraParser.T__1)
                pass


            self._ctx.stop = self._input.LT(-1)
            self.state = 57
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,5,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    localctx = BoraParser.ImplicitTermAndOperatorContext(self, BoraParser.TermContext(self, _parentctx, _parentState))
                    self.pushNewRecursionContext(localctx, _startState, self.RULE_term)
                    self.state = 53
                    if not self.precpred(self._ctx, 1):
                        from antlr4.error.Errors import FailedPredicateException
                        raise FailedPredicateException(self, "self.precpred(self._ctx, 1)")
                    self.state = 54
                    self.term(2) 
                self.state = 59
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,5,self._ctx)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.unrollRecursionContexts(_parentctx)
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
                return self.precpred(self._ctx, 9)
         

            if predIndex == 1:
                return self.precpred(self._ctx, 8)
         

            if predIndex == 2:
                return self.precpred(self._ctx, 7)
         

            if predIndex == 3:
                return self.precpred(self._ctx, 6)
         

            if predIndex == 4:
                return self.precpred(self._ctx, 5)
         

            if predIndex == 5:
                return self.precpred(self._ctx, 4)
         

            if predIndex == 6:
                return self.precpred(self._ctx, 3)
         

    def term_sempred(self, localctx:TermContext, predIndex:int):
            if predIndex == 7:
                return self.precpred(self._ctx, 1)
         




