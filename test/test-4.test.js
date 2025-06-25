const fs = require('fs');
const path = require('path');

test('Use of typeof for each variable', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Use of typeof for each variable
  expect(code).toMatch(/typeof\s+\w+/);
});
