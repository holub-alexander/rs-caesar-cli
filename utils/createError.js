const process = require('process');

const createError = (message, other = '') => {
  process.stderr.write(`${message.replace(/\./g, '\n')} ${other}`);
};

module.exports = createError;
