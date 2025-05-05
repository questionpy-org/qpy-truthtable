// Generated from Bora.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import BoraVisitor from "./BoraVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class BoraParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly VARIABLE = 3;
	public static readonly AND = 4;
	public static readonly OR = 5;
	public static readonly NOT = 6;
	public static readonly NOR = 7;
	public static readonly NAND = 8;
	public static readonly XOR = 9;
	public static readonly XNOR = 10;
	public static readonly IMPLIES = 11;
	public static readonly TRUE = 12;
	public static readonly FALSE = 13;
	public static readonly WS = 14;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_term = 2;
	public static readonly RULE_factor = 3;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'1'", "'0'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, "VARIABLE", 
                                                             "AND", "OR", 
                                                             "NOT", "NOR", 
                                                             "NAND", "XOR", 
                                                             "XNOR", "IMPLIES", 
                                                             "TRUE", "FALSE", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "expr", "term", "factor",
	];
	public get grammarFileName(): string { return "Bora.g4"; }
	public get literalNames(): (string | null)[] { return BoraParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return BoraParser.symbolicNames; }
	public get ruleNames(): string[] { return BoraParser.ruleNames; }
	public get serializedATN(): number[] { return BoraParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, BoraParser._ATN, BoraParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, BoraParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12362) !== 0)) {
				{
				this.state = 8;
				this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, BoraParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new TermExprContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 12;
			this.term(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 37;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 35;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						localctx = new AndOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 14;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 15;
						this.match(BoraParser.AND);
						this.state = 16;
						this.expr(9);
						}
						break;
					case 2:
						{
						localctx = new NandOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 17;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 18;
						this.match(BoraParser.NAND);
						this.state = 19;
						this.expr(8);
						}
						break;
					case 3:
						{
						localctx = new OrOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 20;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 21;
						this.match(BoraParser.OR);
						this.state = 22;
						this.expr(7);
						}
						break;
					case 4:
						{
						localctx = new NorOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 23;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 24;
						this.match(BoraParser.NOR);
						this.state = 25;
						this.expr(6);
						}
						break;
					case 5:
						{
						localctx = new XorOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 26;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 27;
						this.match(BoraParser.XOR);
						this.state = 28;
						this.expr(5);
						}
						break;
					case 6:
						{
						localctx = new XnorOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 29;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 30;
						this.match(BoraParser.XNOR);
						this.state = 31;
						this.expr(4);
						}
						break;
					case 7:
						{
						localctx = new ImpliesOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 32;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 33;
						this.match(BoraParser.IMPLIES);
						this.state = 34;
						this.expr(3);
						}
						break;
					}
					}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public term(): TermContext;
	public term(_p: number): TermContext;
	// @RuleVersion(0)
	public term(_p?: number): TermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TermContext = new TermContext(this, this._ctx, _parentState);
		let _prevctx: TermContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, BoraParser.RULE_term, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new FactorExprContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 41;
			this.factor();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 47;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ImplicitAndOperatorContext(this, new TermContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_term);
					this.state = 43;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 44;
					this.term(2);
					}
					}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let localctx: FactorContext = new FactorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, BoraParser.RULE_factor);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				localctx = new NotOperatorContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 50;
				this.match(BoraParser.NOT);
				this.state = 51;
				this.factor();
				}
				break;
			case 3:
				localctx = new VariableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 52;
				this.match(BoraParser.VARIABLE);
				}
				break;
			case 12:
				localctx = new LiteralTrueContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 53;
				this.match(BoraParser.TRUE);
				}
				break;
			case 13:
				localctx = new LiteralFalseContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 54;
				this.match(BoraParser.FALSE);
				}
				break;
			case 1:
				localctx = new GroupFactorContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 55;
				this.match(BoraParser.T__0);
				this.state = 56;
				this.expr(0);
				this.state = 57;
				this.match(BoraParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		case 2:
			return this.term_sempred(localctx as TermContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private term_sempred(localctx: TermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,14,62,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,1,0,3,0,10,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,36,8,
	1,10,1,12,1,39,9,1,1,2,1,2,1,2,1,2,1,2,5,2,46,8,2,10,2,12,2,49,9,2,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,60,8,3,1,3,0,2,2,4,4,0,2,4,6,0,0,70,
	0,9,1,0,0,0,2,11,1,0,0,0,4,40,1,0,0,0,6,59,1,0,0,0,8,10,3,2,1,0,9,8,1,0,
	0,0,9,10,1,0,0,0,10,1,1,0,0,0,11,12,6,1,-1,0,12,13,3,4,2,0,13,37,1,0,0,
	0,14,15,10,8,0,0,15,16,5,4,0,0,16,36,3,2,1,9,17,18,10,7,0,0,18,19,5,8,0,
	0,19,36,3,2,1,8,20,21,10,6,0,0,21,22,5,5,0,0,22,36,3,2,1,7,23,24,10,5,0,
	0,24,25,5,7,0,0,25,36,3,2,1,6,26,27,10,4,0,0,27,28,5,9,0,0,28,36,3,2,1,
	5,29,30,10,3,0,0,30,31,5,10,0,0,31,36,3,2,1,4,32,33,10,2,0,0,33,34,5,11,
	0,0,34,36,3,2,1,3,35,14,1,0,0,0,35,17,1,0,0,0,35,20,1,0,0,0,35,23,1,0,0,
	0,35,26,1,0,0,0,35,29,1,0,0,0,35,32,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,
	37,38,1,0,0,0,38,3,1,0,0,0,39,37,1,0,0,0,40,41,6,2,-1,0,41,42,3,6,3,0,42,
	47,1,0,0,0,43,44,10,1,0,0,44,46,3,4,2,2,45,43,1,0,0,0,46,49,1,0,0,0,47,
	45,1,0,0,0,47,48,1,0,0,0,48,5,1,0,0,0,49,47,1,0,0,0,50,51,5,6,0,0,51,60,
	3,6,3,0,52,60,5,3,0,0,53,60,5,12,0,0,54,60,5,13,0,0,55,56,5,1,0,0,56,57,
	3,2,1,0,57,58,5,2,0,0,58,60,1,0,0,0,59,50,1,0,0,0,59,52,1,0,0,0,59,53,1,
	0,0,0,59,54,1,0,0,0,59,55,1,0,0,0,60,7,1,0,0,0,5,9,35,37,47,59];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BoraParser.__ATN) {
			BoraParser.__ATN = new ATNDeserializer().deserialize(BoraParser._serializedATN);
		}

		return BoraParser.__ATN;
	}


	static DecisionsToDFA = BoraParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: BoraParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return BoraParser.RULE_prog;
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: BoraParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return BoraParser.RULE_expr;
	}
	public override copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ImpliesOperatorContext extends ExprContext {
	constructor(parser: BoraParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public IMPLIES(): TerminalNode {
		return this.getToken(BoraParser.IMPLIES, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitImpliesOperator) {
			return visitor.visitImpliesOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrOperatorContext extends ExprContext {
	constructor(parser: BoraParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public OR(): TerminalNode {
		return this.getToken(BoraParser.OR, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitOrOperator) {
			return visitor.visitOrOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TermExprContext extends ExprContext {
	constructor(parser: BoraParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public term(): TermContext {
		return this.getTypedRuleContext(TermContext, 0) as TermContext;
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitTermExpr) {
			return visitor.visitTermExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NandOperatorContext extends ExprContext {
	constructor(parser: BoraParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public NAND(): TerminalNode {
		return this.getToken(BoraParser.NAND, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitNandOperator) {
			return visitor.visitNandOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class XorOperatorContext extends ExprContext {
	constructor(parser: BoraParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public XOR(): TerminalNode {
		return this.getToken(BoraParser.XOR, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitXorOperator) {
			return visitor.visitXorOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndOperatorContext extends ExprContext {
	constructor(parser: BoraParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public AND(): TerminalNode {
		return this.getToken(BoraParser.AND, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitAndOperator) {
			return visitor.visitAndOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class XnorOperatorContext extends ExprContext {
	constructor(parser: BoraParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public XNOR(): TerminalNode {
		return this.getToken(BoraParser.XNOR, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitXnorOperator) {
			return visitor.visitXnorOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NorOperatorContext extends ExprContext {
	constructor(parser: BoraParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public NOR(): TerminalNode {
		return this.getToken(BoraParser.NOR, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitNorOperator) {
			return visitor.visitNorOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parser?: BoraParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return BoraParser.RULE_term;
	}
	public override copyFrom(ctx: TermContext): void {
		super.copyFrom(ctx);
	}
}
export class ImplicitAndOperatorContext extends TermContext {
	constructor(parser: BoraParser, ctx: TermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public term_list(): TermContext[] {
		return this.getTypedRuleContexts(TermContext) as TermContext[];
	}
	public term(i: number): TermContext {
		return this.getTypedRuleContext(TermContext, i) as TermContext;
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitImplicitAndOperator) {
			return visitor.visitImplicitAndOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FactorExprContext extends TermContext {
	constructor(parser: BoraParser, ctx: TermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public factor(): FactorContext {
		return this.getTypedRuleContext(FactorContext, 0) as FactorContext;
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitFactorExpr) {
			return visitor.visitFactorExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	constructor(parser?: BoraParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return BoraParser.RULE_factor;
	}
	public override copyFrom(ctx: FactorContext): void {
		super.copyFrom(ctx);
	}
}
export class NotOperatorContext extends FactorContext {
	constructor(parser: BoraParser, ctx: FactorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(BoraParser.NOT, 0);
	}
	public factor(): FactorContext {
		return this.getTypedRuleContext(FactorContext, 0) as FactorContext;
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitNotOperator) {
			return visitor.visitNotOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralTrueContext extends FactorContext {
	constructor(parser: BoraParser, ctx: FactorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRUE(): TerminalNode {
		return this.getToken(BoraParser.TRUE, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitLiteralTrue) {
			return visitor.visitLiteralTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableContext extends FactorContext {
	constructor(parser: BoraParser, ctx: FactorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VARIABLE(): TerminalNode {
		return this.getToken(BoraParser.VARIABLE, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralFalseContext extends FactorContext {
	constructor(parser: BoraParser, ctx: FactorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FALSE(): TerminalNode {
		return this.getToken(BoraParser.FALSE, 0);
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitLiteralFalse) {
			return visitor.visitLiteralFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupFactorContext extends FactorContext {
	constructor(parser: BoraParser, ctx: FactorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitGroupFactor) {
			return visitor.visitGroupFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
