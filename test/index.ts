import { Test, run, test } from 'beater';
import assert from 'power-assert';
import { add } from '../src';

const category = '/ ';
const tests: Test[] = [
  test(category + 'bath.names', () => {
    assert(3 === add(1, 2));
  })
];

run(tests).catch(() => process.exit(1));
