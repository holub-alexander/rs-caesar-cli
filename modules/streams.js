const fs = require('fs');
const chipher = require('./chipher');
const createError = require('../utils/createError');

const streams = (data = '', isReadFile = true, args) => {
  const writeStream = (writeData) => {
    const writeableStream = fs.createWriteStream(`${__dirname}/../${args.o.trim()}`, {
      flags: 'a+',
    });
    writeableStream.write(writeData);
  };

  const readStream = () => {
    let res = '';

    const read = fs.createReadStream(`${__dirname}/../${args.i.trim()}`, {
      flag: 'r',
      encoding: 'UTF-8',
    });

    read.on('data', (chunk) => {
      res = chunk;
    });

    read.on('end', () => {
      const data = chipher(res, args.s, args.a !== 'encode');
      writeStream(data);
    });

    read.on('error', (err) => {
      createError('Невозможно открыть или нет указанного файла: ', err.path);
    });
  };

  if (data !== '' && !isReadFile) {
    writeStream(data);
  } else {
    readStream();
  }
};

module.exports = streams;
