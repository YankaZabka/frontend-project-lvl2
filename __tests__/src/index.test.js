import { test, expect } from '@jest/globals';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rightOutput = '{\n'
  + '    common: {\n'
  + '      + follow: false\n'
  + '        setting1: Value 1\n'
  + '      - setting2: 200\n'
  + '      - setting3: true\n'
  + '      + setting3: null\n'
  + '      + setting4: blah blah\n'
  + '      + setting5: {\n'
  + '            key5: value5\n'
  + '        }\n'
  + '        setting6: {\n'
  + '            doge: {\n'
  + '              - wow: \n'
  + '              + wow: so much\n'
  + '            }\n'
  + '            key: value\n'
  + '          + ops: vops\n'
  + '        }\n'
  + '    }\n'
  + '    group1: {\n'
  + '      - baz: bas\n'
  + '      + baz: bars\n'
  + '        foo: bar\n'
  + '      - nest: {\n'
  + '            key: value\n'
  + '        }\n'
  + '      + nest: str\n'
  + '    }\n'
  + '  - group2: {\n'
  + '        abc: 12345\n'
  + '        deep: {\n'
  + '            id: 45\n'
  + '        }\n'
  + '    }\n'
  + '  + group3: {\n'
  + '        deep: {\n'
  + '            id: {\n'
  + '                number: 45\n'
  + '            }\n'
  + '        }\n'
  + '        fee: 100500\n'
  + '    }\n'
  + '}';

test('genDiff test with json', () => {
  const filePath1 = path.join(__dirname, '../..', '__fixtures__/file1.json');
  const filePath2 = path.join(__dirname, '../..', '__fixtures__/file2.json');
  expect(genDiff(filePath1, filePath2)).toBe(rightOutput);
});
test('genDiff test with yaml', () => {
  const filePath1 = path.join(__dirname, '../..', '__fixtures__/file1.yaml');
  const filePath2 = path.join(__dirname, '../..', '__fixtures__/file2.yml');
  expect(genDiff(filePath1, filePath2)).toBe(rightOutput);
});
