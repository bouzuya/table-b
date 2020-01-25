import { Test, run } from 'beater';
import { named as test } from 'beater-helpers';
import assert from 'power-assert';
import textTable from 'text-table';
import tableBDefaultExport, { table as tableB } from '../src';

const category = '/ ';
const tests: Test[] = [
  test(category + 'original text-table', () => {
    assert.deepEqual(
      textTable(
        [
          ['いろは', '123'],
          ['abc', '456']
        ],
        {
          align: ['l', 'r']
        }
      ),
      ['いろは  123', 'abc  456'].join('\n')
    );
  }),
  test(category + 'table-b example', () => {
    assert.deepEqual(
      tableB(
        [
          ['いろは', '123'],
          ['abc', '456']
        ],
        {
          align: ['l', 'r']
        }
      ),
      ['いろは  123', 'abc     456'].join('\n')
    );
  }),
  test(category + 'table-b default exports', () => {
    assert.deepEqual(
      tableBDefaultExport(
        [
          ['いろは', '123'],
          ['abc', '456']
        ],
        {
          align: ['l', 'r']
        }
      ),
      ['いろは  123', 'abc     456'].join('\n')
    );
  }),
  test(category + "table-b don't use eastasianwidth", () => {
    assert.deepEqual(
      tableB(
        [
          ['いろは', '123'],
          ['abc', '456']
        ],
        {
          align: ['l', 'r'],
          stringLength: (s) => s.length
        }
      ),
      ['いろは  123', 'abc  456'].join('\n')
    );
  })
];

run(tests).catch(() => process.exit(1));
