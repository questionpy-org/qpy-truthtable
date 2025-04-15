grammar Bora;

prog: expr?;

expr: expr AND expr     # andOperator
    | expr NAND expr    # nandOperator
    | expr OR expr      # orOperator
    | expr NOR expr     # norOperator
    | expr XOR expr     # xorOperator
    | expr XNOR expr    # xnorOperator
    | expr IMPLIES expr # impliesOperator
    | NOT term          # notOperator
    | term              # termExpr;

term: VARIABLE term     # implicitVariableAndOperator
    | VARIABLE          # variable
    | TRUE              # literalTrue
    | FALSE             # literalFalse
    | '(' expr ')'      # groupFactor
    | term term         # implicitTermAndOperator;


VARIABLE: [a-zA-Z];

AND: 'and'|'AND'|'*';
OR: 'or'|'OR'|'+';
NOT: 'not'|'NOT'|'~';

NOR: 'nor'|'NOR';
NAND: 'nand'|'NAND';

XOR: 'xor'|'XOR';
XNOR: 'xnor'|'XNOR'|'<->'|'<=>';

IMPLIES: 'implies'|'IMPLIES'|'->'|'=>';

TRUE: '1';
FALSE: '0';

WS: [ \t\r\n]+ -> skip;
