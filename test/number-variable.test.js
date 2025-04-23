const fs = require('fs');
const path = require('path');

test('Number variable', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Number variable
  expect(code).toMatch(/let\s+age\s*=\s*\d+;?/);
});
