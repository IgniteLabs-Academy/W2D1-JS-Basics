const fs = require('fs');
const path = require('path');

test('At least 5 variable declarations of different types', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: At least 5 variable declarations (string, number, boolean, etc.)
  const variableTypes = [
    /let\s+\w+\s*=\s*['"`][^'"]*['"`];?/, // string
    /let\s+\w+\s*=\s*\d+;?/, // number
    /let\s+\w+\s*=\s*(true|false);?/, // boolean
    /let\s+\w+\s*=\s*\[.*\];?/, // array
    /let\s+\w+\s*=\s*\{.*\};?/ // object
  ];
  let found = 0;
  variableTypes.forEach((regex) => {
    if (regex.test(code)) found++;
  });
  expect(found).toBeGreaterThanOrEqual(3); // At least 3 different types
  // Also check for at least 5 let/const/var declarations
  const allVars = code.match(/(let|const|var)\s+\w+/g) || [];
  expect(allVars.length).toBeGreaterThanOrEqual(5);
});
