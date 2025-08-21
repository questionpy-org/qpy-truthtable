// Generated from ../Bora.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ProgContext } from "./BoraParser.js";
import { ImpliesOperatorContext } from "./BoraParser.js";
import { OrOperatorContext } from "./BoraParser.js";
import { TermExprContext } from "./BoraParser.js";
import { NandOperatorContext } from "./BoraParser.js";
import { XorOperatorContext } from "./BoraParser.js";
import { AndOperatorContext } from "./BoraParser.js";
import { XnorOperatorContext } from "./BoraParser.js";
import { NorOperatorContext } from "./BoraParser.js";
import { ImplicitAndOperatorContext } from "./BoraParser.js";
import { FactorExprContext } from "./BoraParser.js";
import { NotOperatorContext } from "./BoraParser.js";
import { VariableContext } from "./BoraParser.js";
import { LiteralTrueContext } from "./BoraParser.js";
import { LiteralFalseContext } from "./BoraParser.js";
import { GroupFactorContext } from "./BoraParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BoraParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class BoraVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `BoraParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by the `impliesOperator`
	 * labeled alternative in `BoraParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImpliesOperator?: (ctx: ImpliesOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `orOperator`
	 * labeled alternative in `BoraParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrOperator?: (ctx: OrOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `termExpr`
	 * labeled alternative in `BoraParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermExpr?: (ctx: TermExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `nandOperator`
	 * labeled alternative in `BoraParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNandOperator?: (ctx: NandOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `xorOperator`
	 * labeled alternative in `BoraParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXorOperator?: (ctx: XorOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `andOperator`
	 * labeled alternative in `BoraParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndOperator?: (ctx: AndOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `xnorOperator`
	 * labeled alternative in `BoraParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXnorOperator?: (ctx: XnorOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `norOperator`
	 * labeled alternative in `BoraParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNorOperator?: (ctx: NorOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `implicitAndOperator`
	 * labeled alternative in `BoraParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitAndOperator?: (ctx: ImplicitAndOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `factorExpr`
	 * labeled alternative in `BoraParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactorExpr?: (ctx: FactorExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `notOperator`
	 * labeled alternative in `BoraParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotOperator?: (ctx: NotOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `variable`
	 * labeled alternative in `BoraParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;
	/**
	 * Visit a parse tree produced by the `literalTrue`
	 * labeled alternative in `BoraParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralTrue?: (ctx: LiteralTrueContext) => Result;
	/**
	 * Visit a parse tree produced by the `literalFalse`
	 * labeled alternative in `BoraParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralFalse?: (ctx: LiteralFalseContext) => Result;
	/**
	 * Visit a parse tree produced by the `groupFactor`
	 * labeled alternative in `BoraParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupFactor?: (ctx: GroupFactorContext) => Result;
}

