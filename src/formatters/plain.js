import _ from 'lodash';

const convertValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  } return value;
};

const plain = (diffArr) => {
  const iteration = (arr, path) => arr.filter((item) => item.diffValue !== 'same')
    .map((item) => {
      const newPath = path ? `${path}.${item.propertyName}` : item.propertyName;
      switch (item.diffValue) {
        case 'nested':
          return `${iteration(item.children, newPath)}`;
        case 'first':
          return `Property '${newPath}' was removed`;
        case 'second':
          return `Property '${newPath}' was added with value: ${convertValue(item.propertyValue)}`;
        case 'both':
          return `Property '${newPath}' was updated. From ${convertValue(item.propertyValue1)} to ${convertValue(item.propertyValue2)}`;
        default:
          throw new Error('Oops! Something went wrong...');
      }
    }).join('\n');

  return iteration(diffArr, 0);
};

export default plain;
