var table = require('../'); // require('table-b');

var message = table([
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
