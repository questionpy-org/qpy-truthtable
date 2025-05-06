import {
    CommonTokenStream,
    CharStream,
    ErrorListener,
} from "antlr4";

import BoraLexer from "./generated/BoraLexer.js";
import BoraParser, {
    AndOperatorContext, ExprContext,
    GroupFactorContext,
    ImplicitAndOperatorContext,
    ImpliesOperatorContext,
    NandOperatorContext,
    NorOperatorContext,
    NotOperatorContext,
    OrOperatorContext,
    ProgContext,
    VariableContext,
    XnorOperatorContext,
    XorOperatorContext,
} from "./generated/BoraParser.js";
import BoraVisitor from "./generated/BoraVisitor.js";

export type OutputFormat = "MATHEMATICAL" | "SYMBOLICAL";

interface BinaryOperatorContext {
    expr(i: number): ExprContext,
}

class BoraVisitorImplementation extends BoraVisitor<string> {
    private readonly format: OutputFormat;

    constructor(format: OutputFormat) {
        super();
        this.format = format;
    }

    #getBinaryOperands = (ctx: BinaryOperatorContext) => [this.visit(ctx.expr(0)), this.visit(ctx.expr(1))];

    visitAndOperator = (ctx: AndOperatorContext) => {
        const [left, right] = this.#getBinaryOperands(ctx);
        return this.format === "MATHEMATICAL" ? `${left} \\cdot ${right}` : `${left} \\land ${right}`;
    };

    visitOrOperator = (ctx: OrOperatorContext) => {
        const [left, right] = this.#getBinaryOperands(ctx);
        return this.format === "MATHEMATICAL" ? `${left} + ${right}` : `${left} \\lor ${right}`;
    };

    visitNotOperator = (ctx: NotOperatorContext) => {
        const factor = this.visit(ctx.factor());
        return this.format === "MATHEMATICAL" ? `\\overline{${factor}}` : `\\neg ${factor}`;
    }

    visitNorOperator = (ctx: NorOperatorContext) => {
        const [left, right] = this.#getBinaryOperands(ctx);
        return `${left} ⊽ ${right}`;
    };

    visitNandOperator = (ctx: NandOperatorContext) => {
        const [left, right] = this.#getBinaryOperands(ctx);
        return `${left} ⊼ ${right}`;
    };

    visitXorOperator = (ctx: XorOperatorContext) => {
        const [left, right] = this.#getBinaryOperands(ctx);
        return `${left} ⊻ ${right}`;
    };

    visitXnorOperator = (ctx: XnorOperatorContext) => {
        const [left, right] = this.#getBinaryOperands(ctx);
        return `${left} \\iff ${right}`;
    };

    visitImpliesOperator = (ctx: ImpliesOperatorContext) => {
        const [left, right] = this.#getBinaryOperands(ctx);
        return `${left} \\implies ${right}`;
    };

    visitImplicitAndOperator = (ctx: ImplicitAndOperatorContext) => {
        const left = this.visit(ctx.term(0));
        const right = this.visit(ctx.term(1));

        return this.format === "MATHEMATICAL" ? `${left} \\cdot ${right}` : `${left} \\land ${right}`;
    };

    visitVariable = (ctx: VariableContext) => ctx.getText();

    visitGroupFactor = (ctx: GroupFactorContext) => `(${this.visit(ctx.expr())})`;

    visitLiteralTrue = () => (this.format === "MATHEMATICAL" ? "1" : "\\top");

    visitLiteralFalse = () => (this.format === "MATHEMATICAL" ? "0" : "\\bot");

    visitProg = (ctx: ProgContext) => this.visit(ctx.expr());
}

class BoraErrorListener extends ErrorListener<number> {
    syntaxError() {
        throw new Error("Invalid input.");
    }
}


export const parseBoraToLaTeX = (input: string, format: OutputFormat) => {
    const stream = new CharStream(input);

    const lexer = new BoraLexer(stream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new BoraErrorListener())

    const tokens = new CommonTokenStream(lexer);
    const parser = new BoraParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(new BoraErrorListener())

    const visitor = new BoraVisitorImplementation(format);
    const tree = parser.prog();

    return visitor.visit(tree);
};
