import _ from 'lodash';

const stringify = (currentValue, depth) => {
  if (!_.isObject(currentValue)) {
    return `${currentValue}`;
  }

  const currentIndent = ' '.repeat((4 * depth) + 2);
  const bracketIndent = ' '.repeat(4 * depth);
  const lines = Object
    .entries(currentValue)
    .map(([key, value]) => `${currentIndent}  ${key}: ${stringify(value, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

const stylish = (diffArr) => {
  const iteration = (arr, depth) => arr.map((item) => {
    switch (item.diffValue) {
      case 'nested':
        return `${' '.repeat(4 * depth)}${item.propertyName}: {\n${iteration(item.children, depth + 1)
          .join('')}${' '.repeat(4 * depth)}}\n`;
      case 'first':
        return `${' '.repeat((4 * depth) - 2)}- ${item.propertyName}: ${stringify(item.propertyValue, depth)}\n`;
      case 'second':
        return `${' '.repeat((4 * depth) - 2)}+ ${item.propertyName}: ${stringify(item.propertyValue, depth)}\n`;
      case 'both':
        return `${' '.repeat((4 * depth) - 2)}- ${item.propertyName}: ${stringify(item.propertyValue1, depth)}\n`
          + `${' '.repeat((4 * depth) - 2)}+ ${item.propertyName}: ${stringify(item.propertyValue2, depth)}\n`;
      case 'same':
        return `${' '.repeat(4 * depth)}${item.propertyName}: ${stringify(item.propertyValue)}\n`;
      default:
        throw new Error('Oops! Something went wrong...');
    }
  });

  return `{\n${iteration(diffArr, 1).join('')}}`;
};
export default stylish;
