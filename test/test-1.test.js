const fs = require('fs');
const path = require('path');

test('Arithmetic operator', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Arithmetic operator
  expect(code).toMatch(/let\s+sum\s*=\s*\d+\s*[+\-*/%]\s*\d+;?/);
});
