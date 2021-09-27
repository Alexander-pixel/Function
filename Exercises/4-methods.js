'use strict';

const methods = (iface) => {
  const res = [];
  for (const name in iface) {
    const key = iface[name];
    if (typeof key === 'function')
      res.push([key.name, key.length]);
  }
  return res;
};

const obj = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};;

let res = methods(obj);

console.log(res);
module.exports = { methods };
