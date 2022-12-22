"use strict";

function addContent(name, mobile) {
  var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '없음';
  var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '없음';
  var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '없음';
  var str = "name = ".concat(name, " mobile = ").concat(mobile, " home = ").concat(home, " address = ").concat(address, " email = ").concat(address);
  console.log(str);
}
addContent('홍길동', '000-111-2222');
addContent('차은우', '000-111-3333', '서울시', '대치동');
function foodReport(name, age) {
  var str = str = "name = ".concat(name, " age = ").concat(age);
  for (var _len = arguments.length, favoritFoods = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    favoritFoods[_key - 2] = arguments[_key];
  }
  console.log(str, favoritFoods);
}
foodReport('용용이', 21, '치킨', '파스타', '커피');
foodReport('이응', 22, '치킨');