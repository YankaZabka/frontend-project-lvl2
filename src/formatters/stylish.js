import _ from 'lodash';

const stylish = (diffObj) => {
  return _.sortBy(diffObj, 'propertyName')
    .map((obj) => `  ${obj.diffValue} ${obj.propertyName}: ${obj.propertyValue}`);
}

export default stylish
