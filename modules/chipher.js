const chipher = (str = '', offset = 1, isDecode = false) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let isNegative = offset < 0;
  let res = '';

  if (isDecode) {
    isNegative = true;
  }

  for (let i = 0; i < str.length; i += 1) {
    const curLatter = str[i].toLowerCase();
    const curLatterIndex = alphabet.indexOf(curLatter);
    let finalIndexLatter = 0;
    const isUpperCase = str[i] === str[i].toUpperCase();

    if (curLatterIndex < 0) {
      res += str[i];
      continue;
    }

    if (isDecode) {
      if (offset < 0) {
        finalIndexLatter = (curLatterIndex + Math.abs(offset)) % 26;
      } else {
        finalIndexLatter = (curLatterIndex - Math.abs(offset)) % 26;
      }
    } else {
      finalIndexLatter = (curLatterIndex + offset) % 26;
    }

    if (isNegative) {
      if (finalIndexLatter > 0) {
        finalIndexLatter = finalIndexLatter;
      } else if (finalIndexLatter < 0) {
        finalIndexLatter = alphabet.length + finalIndexLatter;
      } else {
        finalIndexLatter = 0;
      }

      res += isUpperCase ? alphabet[finalIndexLatter].toUpperCase() : alphabet[finalIndexLatter];
    } else {
      res += isUpperCase ? alphabet[finalIndexLatter].toUpperCase() : alphabet[finalIndexLatter];
    }
  }

  return res;
};

module.exports = chipher;
