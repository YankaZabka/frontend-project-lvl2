import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (diffArr, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diffArr);
    case 'plain':
      return plain(diffArr);
    case 'json':
      return json(diffArr);
    default:
      throw new Error(`Формат не поддерживается: ${format}`);
  }
};
