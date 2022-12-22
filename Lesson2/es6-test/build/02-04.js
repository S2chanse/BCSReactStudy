"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
var p1 = {
  name: 'Doil',
  age: 25
};
({
  name: 'Doil',
  age: 28
}), _readOnlyError("p1");
console.log(p1);