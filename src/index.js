import * as fs from 'fs';
import * as path from 'path';
import parse from './parsers.js';
import format from "./formatters/index.js"

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath.trim()), 'utf-8');

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const data1 = parse(readFile(filePath1), path.extname(filePath1));
  const data2 = parse(readFile(filePath2), path.extname(filePath2));
  const data1Keys = Object.keys({ ...data1 });
  const data2Keys = Object.keys({ ...data2 });

  const diffObj = data1Keys.map((key1) => {
    if (data1[key1] === data2[key1]) {
      return {
        propertyName: key1,
        propertyValue: data1[key1],
        diffValue: ' ',
      };
    } if (data1[key1] !== data2[key1]) {
      return {
        propertyName: key1,
        propertyValue: data1[key1],
        diffValue: '-',
      };
    }
    return null;
  });
  data2Keys.forEach((key2) => {
    if (data1[key2] !== data2[key2]) {
      diffObj.push({
        propertyName: key2,
        propertyValue: data2[key2],
        diffValue: '+',
      });
    }
  });
  const result = format(diffObj, formatName)
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
