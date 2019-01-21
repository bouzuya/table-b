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

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([https://bouzuya.net/][url])

[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: https://bouzuya.net/
