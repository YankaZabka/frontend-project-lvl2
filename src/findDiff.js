import _ from 'lodash';

const findDiff = (data1, data2) => {
  const keys = Object.keys({ ...data1, ...data2 });
  const sortedKeys = _.sortBy(keys);

  return sortedKeys.map((key) => {
    const data1Value = data1[key];
    const data2Value = data2[key];
    if (!_.has(data1, key)) {
      return {
        propertyName: key,
        propertyValue: data2Value,
        diffValue: 'second',
      };
    }
    if (!_.has(data2, key)) {
      return {
        propertyName: key,
        propertyValue: data1Value,
        diffValue: 'first',
      };
    }
    if (_.isPlainObject(data1Value) && _.isPlainObject(data2Value)) {
      return {
        propertyName: key,
        children: findDiff(data1Value, data2Value),
        diffValue: 'nested',
      };
    }
    if (!_.isEqual(data1Value, data2Value)) {
      return {
        propertyName: key,
        propertyValue1: data1Value,
        propertyValue2: data2Value,
        diffValue: 'both',
      };
    }
    return {
      propertyName: key,
      propertyValue: data1Value,
      diffValue: 'same',
    };
  });
};

export default findDiff;
