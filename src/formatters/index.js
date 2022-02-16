import stylish from './stylish.js';
import plain from './plain.js';

export default (diffArr, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diffArr);
    case 'plain':
      return plain(diffArr);
    default:
      throw new Error(`Формат не поддерживается: ${format}`);
  }
};
