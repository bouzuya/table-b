# table-b

text-table for Japanese.

## Dependencies

- [substack/text-table](https://github.com/substack/text-table)
- [komagata/eastasianwidth](https://github.com/komagata/eastasianwidth)

## Installation

```bash
npm install table-b
```

## Usage

```typescript
import table from 'table-b';

const message = table([
  ['いろは', '123'],
  ['abc', '456']
], {
  align: ['l', 'r']
});

console.log(message);

// table-b:
// いろは 123
// abc    456

// text-table:
// いろは  123
// abc  456
```

## Badges

[![npm version][npm-badge-url]][npm-url]
[![Travis CI][travisci-badge-url]][travisci-url]
[![Coveralls][coveralls-badge-url]][coveralls-url]

[coveralls-badge-url]: https://img.shields.io/coveralls/github/bouzuya/table-b.svg
[coveralls-url]: https://coveralls.io/github/bouzuya/table-b
[npm-badge-url]: https://img.shields.io/npm/v/table-b.svg
[npm-url]: https://www.npmjs.com/package/table-b
[travisci-badge-url]: https://img.shields.io/travis/bouzuya/table-b.svg
[travisci-url]: https://travis-ci.org/bouzuya/table-b

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([https://bouzuya.net/][url])

[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: https://bouzuya.net/
