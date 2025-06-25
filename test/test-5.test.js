const fs = require('fs');
const path = require('path');

test('Output using console.log and alert', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Output using console.log and alert
  expect(code).toMatch(/console\.log\s*\(/);
  expect(code).toMatch(/alert\s*\(/);
});
