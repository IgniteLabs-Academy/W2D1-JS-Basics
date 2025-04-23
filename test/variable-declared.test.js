const fs = require('fs');
const path = require('path');

test('Variable declared', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Variable declared
  expect(code).toMatch(/let\s+name\s*=\s*['"].+['"];?/);
});
