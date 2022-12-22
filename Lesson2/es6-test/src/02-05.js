function addContent(
  name,
  mobile,
  home = '없음',
  address = '없음',
  email = '없음'
) {
  var str = `name = ${name} mobile = ${mobile} home = ${home} address = ${address} email = ${address}`;
  console.log(str);
}

addContent('홍길동', '000-111-2222');
addContent('차은우', '000-111-3333', '서울시', '대치동');

function foodReport(name, age, ...favoritFoods) {
  var str = (str = `name = ${name} age = ${age}`);
  console.log(str, favoritFoods);
}
foodReport('용용이', 21, '치킨', '파스타', '커피');
foodReport('이응', 22, '치킨');
