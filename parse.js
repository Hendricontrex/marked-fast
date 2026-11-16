// Optimized drop-in for marked 18.1.3: parse(markdown) returns exactly the
// HTML marked renders with its defaults (GFM on, async off), faster.
// Fork of marked's source (MIT, see src/ + LICENSE), optimized for speed:
// - inline tokenizer dispatches on the first character, skipping rules that
//   cannot match (Lexer.js #tokenizeInlines)
// - list tokenizer uses one combined "end of item" regex instead of six
//   separate tests per line, and indexOf instead of split() for line ends
//   (Tokenizer.js list(), rules.js listItemBreakRegex)
// - firstLineOf() avoids split() flattening sliced strings (Tokenizer.js)
import { marked } from './src/marked.js';

/** The HTML marked renders for `markdown`, with marked's defaults. */
export function parse(markdown) {
  return marked.parse(markdown);
}
