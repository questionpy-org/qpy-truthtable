import { CommonTokenStream, CharStream } from "antlr4";

import BoraLexer from "./generated/BoraLexer.js";
import BoraParser, {
    AndOperatorContext,
    GroupFactorContext,
    ImplicitTermAndOperatorContext,
    ImplicitVariableAndOperatorContext,
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

class BoraVisitorImplementation extends BoraVisitor<string> {
    private readonly format: OutputFormat;

    constructor(format: OutputFormat) {
        super();
        this.format = format;
    }

    visitAndOperator = (ctx: AndOperatorContext) => {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        return this.format === "MATHEMATICAL" ? `${left} \\cdot ${right}` : `${left} \\land ${right}`;
    };

    visitOrOperator = (ctx: OrOperatorContext) => {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        return this.format === "MATHEMATICAL" ? `(${left} + ${right})` : `(${left} \\lor ${right})`;
    };

    visitNotOperator = (ctx: NotOperatorContext) => {
        const inner = this.visit(ctx.term());

        return this.format === "MATHEMATICAL" ? `\\overline{${inner}}` : `\\neg (${inner})`;
    };

    visitNorOperator = (ctx: NorOperatorContext) => {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        return `(${left} ⊽ ${right})`;
    };

    visitNandOperator = (ctx: NandOperatorContext) => {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        return `(${left} ⊼ ${right})`;
    };

    visitXorOperator = (ctx: XorOperatorContext) => {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        return `(${left} ⊻ ${right})`;
    };

    visitXnorOperator = (ctx: XnorOperatorContext) => {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        return `(${left} \\iff ${right})`;
    };

    visitImpliesOperator = (ctx: ImpliesOperatorContext) => {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));

        return `(${left} \\implies ${right})`;
    };

    visitImplicitTermAndOperator = (ctx: ImplicitTermAndOperatorContext) => {
        const left = this.visit(ctx.term(0));
        const right = this.visit(ctx.term(1));

        return this.format === "MATHEMATICAL" ? `${left} \\cdot ${right}` : `${left} \\land ${right}`;
    };

    visitImplicitVariableAndOperator = (ctx: ImplicitVariableAndOperatorContext) => {
        const left = ctx.VARIABLE().getText();
        const right = this.visit(ctx.term());

        return this.format === "MATHEMATICAL" ? `${left} \\cdot ${right}` : `${left} \\land ${right}`;
    };

    visitVariable = (ctx: VariableContext) => ctx.getText();

    visitGroupFactor = (ctx: GroupFactorContext) => this.visit(ctx.expr());

    visitLiteralTrue = () => (this.format === "MATHEMATICAL" ? "1" : "\\top");

    visitLiteralFalse = () => (this.format === "MATHEMATICAL" ? "0" : "\\bot");

    visitProg = (ctx: ProgContext) => this.visit(ctx.expr());
}

export const parseFormulaToLaTeX = (input: string, format: OutputFormat) => {
    const stream = new CharStream(input);
    const lexer = new BoraLexer(stream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new BoraParser(tokens);

    const visitor = new BoraVisitorImplementation(format);
    const tree = parser.prog();

    return visitor.visit(tree);
};
