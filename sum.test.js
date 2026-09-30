const test = require('node:test');
const assert = require('node:assert');

function sum(a, b) { return a + b; }

test('sum складывает два числа', () => {
  assert.strictEqual(sum(2, 2), 4);
});