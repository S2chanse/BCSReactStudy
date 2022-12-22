"use strict";
const test1 = (a, b) => a + b;
console.log(test1(1, 2));
const arrayConcat = (items1, items2) => {
    return items1.concat(items2);
};
let arr1 = arrayConcat([1, 2, 3, 4], [7, 4, 3, 2]);
arr1.push(true);
console.log(arr1);
//# sourceMappingURL=02-26.js.map