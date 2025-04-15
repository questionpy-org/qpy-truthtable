# TruthTables

## Development

We are using [ANTLR](https://github.com/antlr/antlr4) to parse and transform our custom boolean algebra syntax
and [rollup](https://github.com/rollup/rollup) to bundle our JavaScript.

To install the required dependencies, run the following commands:
```pip install antlr4-tools``` and ```npm install```

### Parser

The grammar of our boolean algebra syntax can be found in `Bora.g4`. After modifying the grammar file, regenerate
the parser code for both TypeScript and Python with `npm run antlr`.

With `python -m python.qpy.truthtable.formula._parser` you can test the parser.
