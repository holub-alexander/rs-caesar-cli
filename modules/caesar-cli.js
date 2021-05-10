const minimist = require('minimist');
const process = require('process');
const readline = require('readline');
const createError = require('../utils/createError');
const verifyCommandsCli = require('./checkArgs');
const chipher = require('./chipher');
const streams = require('./streams');

const readWriteConsole = (args) => {
  let finalStr = '';

  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  process.stdin.on('keypress', (str, key) => {
    let enter = '';

    if (key.sequence === '\u0003' && key.ctrl) {
      process.exit();
    }

    if (key.sequence === '\r') {
      const res = chipher(finalStr, args.s, args.a === 'decode');

      streams(res, false, args);
      enter = '\n';
      process.stdout.write(`\n${res}`);
      finalStr = '';
    }

    finalStr += str;

    process.stdout.write(key.sequence + enter);
  });
};

const argsCli = () => {
  const args = minimist(process.argv.slice(2), {
    string: ['action', 'input', 'output'],
    alias: {
      shift: 's',
      input: 'i',
      output: 'o',
      action: 'a',
    },
    default: {
      output: 'output.txt',
      shift: null,
    },
    unknown: (arg) => {
      createError('Неизвестная команда', arg);
      return false;
    },
  });

  if (verifyCommandsCli(args) === null) {
    if (!args.i) {
      readWriteConsole(args);
    }

    if (args.i && args.o) {
      streams('', true, args);
    }
  }

  return args;
};

module.exports = argsCli;
