import * as fs from 'fs';
import * as path from 'path';
import parse from './parsers.js';
import format from './formatters/index.js';
import findDiff from './findDiff.js';

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath.trim()), 'utf-8');

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const data1 = parse(readFile(filePath1), path.extname(filePath1));
  const data2 = parse(readFile(filePath2), path.extname(filePath2));
  const diffArray = findDiff(data1, data2);
  return format(diffArray, formatName);
};

export default genDiff;
