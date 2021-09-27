'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const ipNumber = ip.split('.').map(Number).reduce((sum, cur) =>  (sum << 8) + cur);
  return ipNumber;
};

module.exports = { ipToInt };
