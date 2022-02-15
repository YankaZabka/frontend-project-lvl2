import { test, expect } from '@jest/globals';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('genDiff test with json', () => {
  const filePath1 = path.join(__dirname, '../..', '__fixtures__/file1.json');
  const filePath2 = path.join(__dirname, '../..', '__fixtures__/file2.json');
  const rightOutput = '{\n'
    + '  - follow: false\n'
    + '    host: hexlet.io\n'
    + '  - proxy: 123.234.53.22\n'
    + '  - timeout: 50\n'
    + '  + timeout: 20\n'
    + '  + verbose: true\n'
    + '}';
  expect(genDiff(filePath1, filePath2)).toBe(rightOutput);
});
test('genDiff test with yaml', () => {
  const filePath1 = path.join(__dirname, '../..', '__fixtures__/file1.yaml');
  const filePath2 = path.join(__dirname, '../..', '__fixtures__/file2.yml');
  const rightOutput = '{\n'
    + '  - follow: false\n'
    + '    host: hexlet.io\n'
    + '  - proxy: 123.234.53.22\n'
    + '  - timeout: 50\n'
    + '  + timeout: 20\n'
    + '  + verbose: true\n'
    + '}';
  expect(genDiff(filePath1, filePath2)).toBe(rightOutput);
});
