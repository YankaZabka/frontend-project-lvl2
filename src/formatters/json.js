import _ from 'lodash';

export default (diffArr) => JSON.stringify(_.cloneDeep(diffArr));
