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
		"prog", "expr", "term",
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
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12362) !== 0)) {
				{
				this.state = 6;
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
			this.state = 13;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				{
				localctx = new NotOperatorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 10;
				this.match(BoraParser.NOT);
				this.state = 11;
				this.term(0);
				}
				break;
			case 1:
			case 3:
			case 12:
			case 13:
				{
				localctx = new TermExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 12;
				this.term(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 38;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 36;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						localctx = new AndOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 15;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 16;
						this.match(BoraParser.AND);
						this.state = 17;
						this.expr(10);
						}
						break;
					case 2:
						{
						localctx = new NandOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 18;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 19;
						this.match(BoraParser.NAND);
						this.state = 20;
						this.expr(9);
						}
						break;
					case 3:
						{
						localctx = new OrOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 21;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 22;
						this.match(BoraParser.OR);
						this.state = 23;
						this.expr(8);
						}
						break;
					case 4:
						{
						localctx = new NorOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 24;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 25;
						this.match(BoraParser.NOR);
						this.state = 26;
						this.expr(7);
						}
						break;
					case 5:
						{
						localctx = new XorOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 27;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 28;
						this.match(BoraParser.XOR);
						this.state = 29;
						this.expr(6);
						}
						break;
					case 6:
						{
						localctx = new XnorOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 30;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 31;
						this.match(BoraParser.XNOR);
						this.state = 32;
						this.expr(5);
						}
						break;
					case 7:
						{
						localctx = new ImpliesOperatorContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_expr);
						this.state = 33;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 34;
						this.match(BoraParser.IMPLIES);
						this.state = 35;
						this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 40;
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
			this.state = 51;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				localctx = new ImplicitVariableAndOperatorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 42;
				this.match(BoraParser.VARIABLE);
				this.state = 43;
				this.term(6);
				}
				break;
			case 2:
				{
				localctx = new VariableContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 44;
				this.match(BoraParser.VARIABLE);
				}
				break;
			case 3:
				{
				localctx = new LiteralTrueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 45;
				this.match(BoraParser.TRUE);
				}
				break;
			case 4:
				{
				localctx = new LiteralFalseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 46;
				this.match(BoraParser.FALSE);
				}
				break;
			case 5:
				{
				localctx = new GroupFactorContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 47;
				this.match(BoraParser.T__0);
				this.state = 48;
				this.expr(0);
				this.state = 49;
				this.match(BoraParser.T__1);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 57;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ImplicitTermAndOperatorContext(this, new TermContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, BoraParser.RULE_term);
					this.state = 53;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 54;
					this.term(2);
					}
					}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
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
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 5);
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
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

	public static readonly _serializedATN: number[] = [4,1,14,61,2,0,7,0,2,
	1,7,1,2,2,7,2,1,0,3,0,8,8,0,1,1,1,1,1,1,1,1,3,1,14,8,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,
	37,8,1,10,1,12,1,40,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,52,
	8,2,1,2,1,2,5,2,56,8,2,10,2,12,2,59,9,2,1,2,0,2,2,4,3,0,2,4,0,0,71,0,7,
	1,0,0,0,2,13,1,0,0,0,4,51,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,7,8,1,0,0,0,8,
	1,1,0,0,0,9,10,6,1,-1,0,10,11,5,6,0,0,11,14,3,4,2,0,12,14,3,4,2,0,13,9,
	1,0,0,0,13,12,1,0,0,0,14,38,1,0,0,0,15,16,10,9,0,0,16,17,5,4,0,0,17,37,
	3,2,1,10,18,19,10,8,0,0,19,20,5,8,0,0,20,37,3,2,1,9,21,22,10,7,0,0,22,23,
	5,5,0,0,23,37,3,2,1,8,24,25,10,6,0,0,25,26,5,7,0,0,26,37,3,2,1,7,27,28,
	10,5,0,0,28,29,5,9,0,0,29,37,3,2,1,6,30,31,10,4,0,0,31,32,5,10,0,0,32,37,
	3,2,1,5,33,34,10,3,0,0,34,35,5,11,0,0,35,37,3,2,1,4,36,15,1,0,0,0,36,18,
	1,0,0,0,36,21,1,0,0,0,36,24,1,0,0,0,36,27,1,0,0,0,36,30,1,0,0,0,36,33,1,
	0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,3,1,0,0,0,40,38,1,0,
	0,0,41,42,6,2,-1,0,42,43,5,3,0,0,43,52,3,4,2,6,44,52,5,3,0,0,45,52,5,12,
	0,0,46,52,5,13,0,0,47,48,5,1,0,0,48,49,3,2,1,0,49,50,5,2,0,0,50,52,1,0,
	0,0,51,41,1,0,0,0,51,44,1,0,0,0,51,45,1,0,0,0,51,46,1,0,0,0,51,47,1,0,0,
	0,52,57,1,0,0,0,53,54,10,1,0,0,54,56,3,4,2,2,55,53,1,0,0,0,56,59,1,0,0,
	0,57,55,1,0,0,0,57,58,1,0,0,0,58,5,1,0,0,0,59,57,1,0,0,0,6,7,13,36,38,51,
	57];

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
export class NotOperatorContext extends ExprContext {
	constructor(parser: BoraParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(BoraParser.NOT, 0);
	}
	public term(): TermContext {
		return this.getTypedRuleContext(TermContext, 0) as TermContext;
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
export class LiteralTrueContext extends TermContext {
	constructor(parser: BoraParser, ctx: TermContext) {
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
export class VariableContext extends TermContext {
	constructor(parser: BoraParser, ctx: TermContext) {
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
export class LiteralFalseContext extends TermContext {
	constructor(parser: BoraParser, ctx: TermContext) {
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
export class ImplicitVariableAndOperatorContext extends TermContext {
	constructor(parser: BoraParser, ctx: TermContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VARIABLE(): TerminalNode {
		return this.getToken(BoraParser.VARIABLE, 0);
	}
	public term(): TermContext {
		return this.getTypedRuleContext(TermContext, 0) as TermContext;
	}
	// @Override
	public accept<Result>(visitor: BoraVisitor<Result>): Result {
		if (visitor.visitImplicitVariableAndOperator) {
			return visitor.visitImplicitVariableAndOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImplicitTermAndOperatorContext extends TermContext {
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
		if (visitor.visitImplicitTermAndOperator) {
			return visitor.visitImplicitTermAndOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupFactorContext extends TermContext {
	constructor(parser: BoraParser, ctx: TermContext) {
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
