import stylish from './stylish.js';

export default (diffObj, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diffObj);
    default:
      throw new Error(`Формат не поддерживается: ${format}`);
  }
};
