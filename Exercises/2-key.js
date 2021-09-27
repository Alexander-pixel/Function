'use strict';

const generateKey = (length, characters) => {
  let res = '';
  const len = characters.length;
  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * len);
    res += characters[pos];
  }
  return res;
};
module.exports = { generateKey };
