const fs = require('fs');
const path = require('path');

test('Comparison using == and ===', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Comparison using == and ===
  expect(code).toMatch(/==/);
  expect(code).toMatch(/===/);
});
