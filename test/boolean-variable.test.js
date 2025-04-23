const fs = require('fs');
const path = require('path');

test('Boolean variable', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Boolean variable
  expect(code).toMatch(/let\s+isStudent\s*=\s*(true|false);?/);
});
