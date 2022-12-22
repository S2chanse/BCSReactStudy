let arr = [11, 2, 3, 4];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3);

//직접 연결할 this를 지 정할 수 있다.
//bind() : 지정한 객체를 this로 미리 연결한 새로운 함수 리턴
//apply(),call() : 지정한 객체를 this로 연결 후, 함수 직접 호출

var result = 0;
var obj = { result: 0 };
// obj.add = function (x, y) {
//   function inner() {
//     this.result = x + y;
//   }
//   inner = inner.bind(this);
//   inner();
// };

obj.add = function (x, y) {
  const inner = () => (this.result = x + y);
  inner();
};
obj.add(3, 4);

console.log(obj);
console.log(result);
