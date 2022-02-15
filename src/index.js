import * as fs from 'fs';
import * as path from 'path';
import _ from 'lodash';

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath.trim()), 'utf-8');

const genDiff = (filePath1, filePath2) => {
  const data1 = JSON.parse(readFile(filePath1));
  const data2 = JSON.parse(readFile(filePath2));
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
  const result = _.sortBy(diffObj, 'propertyName')
    .map((obj) => `  ${obj.diffValue} ${obj.propertyName}: ${obj.propertyValue}`);
  const outputString = `{\n${result.join('\n')}\n}`;
  console.log(outputString);
  return outputString;
};

export default genDiff;
