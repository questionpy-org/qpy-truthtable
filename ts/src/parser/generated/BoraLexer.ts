// Generated from Bora.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class BoraLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "VARIABLE", "AND", "OR", "NOT", "NOR", "NAND", "XOR", 
		"XNOR", "IMPLIES", "TRUE", "FALSE", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, BoraLexer._ATN, BoraLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Bora.g4"; }

	public get literalNames(): (string | null)[] { return BoraLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return BoraLexer.symbolicNames; }
	public get ruleNames(): string[] { return BoraLexer.ruleNames; }

	public get serializedATN(): number[] { return BoraLexer._serializedATN; }

	public get channelNames(): string[] { return BoraLexer.channelNames; }

	public get modeNames(): string[] { return BoraLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,14,133,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,1,0,1,1,1,1,1,2,1,2,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,3,3,43,8,3,1,4,1,4,1,4,1,4,1,4,3,4,50,8,4,1,5,1,
	5,1,5,1,5,1,5,1,5,1,5,3,5,59,8,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,67,8,6,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,77,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,85,8,
	8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,101,8,9,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,3,10,121,8,10,1,11,1,11,1,12,1,12,1,13,4,13,128,8,13,11,
	13,12,13,129,1,13,1,13,0,0,14,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
	10,21,11,23,12,25,13,27,14,1,0,2,2,0,65,90,97,122,3,0,9,10,13,13,32,32,
	148,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,
	0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
	0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,31,1,0,0,0,5,33,1,
	0,0,0,7,42,1,0,0,0,9,49,1,0,0,0,11,58,1,0,0,0,13,66,1,0,0,0,15,76,1,0,0,
	0,17,84,1,0,0,0,19,100,1,0,0,0,21,120,1,0,0,0,23,122,1,0,0,0,25,124,1,0,
	0,0,27,127,1,0,0,0,29,30,5,40,0,0,30,2,1,0,0,0,31,32,5,41,0,0,32,4,1,0,
	0,0,33,34,7,0,0,0,34,6,1,0,0,0,35,36,5,97,0,0,36,37,5,110,0,0,37,43,5,100,
	0,0,38,39,5,65,0,0,39,40,5,78,0,0,40,43,5,68,0,0,41,43,5,42,0,0,42,35,1,
	0,0,0,42,38,1,0,0,0,42,41,1,0,0,0,43,8,1,0,0,0,44,45,5,111,0,0,45,50,5,
	114,0,0,46,47,5,79,0,0,47,50,5,82,0,0,48,50,5,43,0,0,49,44,1,0,0,0,49,46,
	1,0,0,0,49,48,1,0,0,0,50,10,1,0,0,0,51,52,5,110,0,0,52,53,5,111,0,0,53,
	59,5,116,0,0,54,55,5,78,0,0,55,56,5,79,0,0,56,59,5,84,0,0,57,59,5,126,0,
	0,58,51,1,0,0,0,58,54,1,0,0,0,58,57,1,0,0,0,59,12,1,0,0,0,60,61,5,110,0,
	0,61,62,5,111,0,0,62,67,5,114,0,0,63,64,5,78,0,0,64,65,5,79,0,0,65,67,5,
	82,0,0,66,60,1,0,0,0,66,63,1,0,0,0,67,14,1,0,0,0,68,69,5,110,0,0,69,70,
	5,97,0,0,70,71,5,110,0,0,71,77,5,100,0,0,72,73,5,78,0,0,73,74,5,65,0,0,
	74,75,5,78,0,0,75,77,5,68,0,0,76,68,1,0,0,0,76,72,1,0,0,0,77,16,1,0,0,0,
	78,79,5,120,0,0,79,80,5,111,0,0,80,85,5,114,0,0,81,82,5,88,0,0,82,83,5,
	79,0,0,83,85,5,82,0,0,84,78,1,0,0,0,84,81,1,0,0,0,85,18,1,0,0,0,86,87,5,
	120,0,0,87,88,5,110,0,0,88,89,5,111,0,0,89,101,5,114,0,0,90,91,5,88,0,0,
	91,92,5,78,0,0,92,93,5,79,0,0,93,101,5,82,0,0,94,95,5,60,0,0,95,96,5,45,
	0,0,96,101,5,62,0,0,97,98,5,60,0,0,98,99,5,61,0,0,99,101,5,62,0,0,100,86,
	1,0,0,0,100,90,1,0,0,0,100,94,1,0,0,0,100,97,1,0,0,0,101,20,1,0,0,0,102,
	103,5,105,0,0,103,104,5,109,0,0,104,105,5,112,0,0,105,106,5,108,0,0,106,
	107,5,105,0,0,107,108,5,101,0,0,108,121,5,115,0,0,109,110,5,73,0,0,110,
	111,5,77,0,0,111,112,5,80,0,0,112,113,5,76,0,0,113,114,5,73,0,0,114,115,
	5,69,0,0,115,121,5,83,0,0,116,117,5,45,0,0,117,121,5,62,0,0,118,119,5,61,
	0,0,119,121,5,62,0,0,120,102,1,0,0,0,120,109,1,0,0,0,120,116,1,0,0,0,120,
	118,1,0,0,0,121,22,1,0,0,0,122,123,5,49,0,0,123,24,1,0,0,0,124,125,5,48,
	0,0,125,26,1,0,0,0,126,128,7,1,0,0,127,126,1,0,0,0,128,129,1,0,0,0,129,
	127,1,0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,132,6,13,0,0,132,28,1,0,
	0,0,10,0,42,49,58,66,76,84,100,120,129,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BoraLexer.__ATN) {
			BoraLexer.__ATN = new ATNDeserializer().deserialize(BoraLexer._serializedATN);
		}

		return BoraLexer.__ATN;
	}


	static DecisionsToDFA = BoraLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}