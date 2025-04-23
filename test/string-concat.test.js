const fs = require('fs');
const path = require('path');

test('String concat', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: String concat
  expect(code).toMatch(/console\.log\(.*\+.*\)/);
});
