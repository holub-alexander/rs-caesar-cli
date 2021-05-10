const createError = require('../utils/createError');

const verifyCommandsCli = (obj) => {
  let result = '';
  let isCurrect = true;

  const checkActionString = () => new RegExp(/^encode$|^decode$/).test(obj.action);

  if (!obj.action || !obj.a) {
    result += 'Неправильно или не был введен аргумент "-a | --action".';
    isCurrect = false;
  }

  if (!checkActionString()) {
    result += 'Неправильно записано значение аргумента "-a | --action".';
    isCurrect = false;
  }

  if (!obj.shift || !obj.s) {
    result += 'Не введено значение аргумента "-s | --shift".';
    isCurrect = false;
  }

  return (!isCurrect) ? createError(result) : null;
};

module.exports = verifyCommandsCli;
