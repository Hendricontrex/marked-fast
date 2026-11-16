# marked-fast — a faster drop-in for marked 18.1.3

[![make.fun](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/Hendricontrex/marked-fast/rank.svg)](https://make.fun/bounty/markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/Hendricontrex/marked-fast/reward.svg)](https://make.fun/bounty/markdown-render-speed-02)

`parse(markdown)` returns exactly the HTML [marked 18.1.3](https://github.com/markedjs/marked) renders with its defaults (GFM on, async off) — but faster. A fork of marked's source (MIT), optimized for speed:

- **Inline tokenizer dispatches on the first character**, skipping rules that cannot match (`src/Lexer.js`).
- **List tokenizer uses one combined "end of item" regex** instead of six separate tests per line, and `indexOf` instead of `split()` for line ends, so sliced strings are never flattened per line (`src/Tokenizer.js`, `src/rules.js`).
- **`firstLineOf()`** avoids `split()` flattening sliced strings (`src/Tokenizer.js`).

## Entry

- `main.ts` — the harness driver: reads `/input/cases.json`, renders each case with `parse()`, writes `/output/html.json`.
- `parse.js` — exports `parse(markdown)`.
- `src/` — the optimized marked source (fork of marked 18.1.3, MIT).

## License

MIT. marked is © marked.js, MIT — see `LICENSE` and the notices in `src/`.
