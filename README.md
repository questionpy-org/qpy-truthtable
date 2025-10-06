# TruthTables

The package strictly\* follows the operator precedence found
[here](http://intrologic.stanford.edu/dictionary/operator_precedence.html).

## Development

We are using [ANTLR](https://github.com/antlr/antlr4) to parse and transform our custom boolean algebra syntax
and [rollup](https://github.com/rollup/rollup) to bundle our JavaScript.

To install the dependencies, run `poetry install` and `poe npm install` sequentially.

### Testing

To execute tests, run `poe test`.

### Parser

The grammar of our boolean algebra syntax can be found in `Bora.g4`. After modifying the grammar file, regenerate
the parser code for both TypeScript and Python with `poe antlr`.

To interactively test the parser, run `bora-cli`.

### TODO
- [ ] \* Currently, `p => q => r` gets parsed to `((p => q) => r)` and not `(p => (q => r))`. The same is true for the
equivalent-operator.
- [ ] Generate random but good and valid formulas.
- [ ] Restricting formula input fields to a set of allowed operations / symbols. (Whitelist, blacklist or both?)
- [ ] Remove / reorder intermediate formula columns.
- [ ] Use intermediate formulas for scoring.
