const test1 = (a: number, b: number): number => a + b;
console.log(test1(1, 2));

//Generic 선언 시, 해당 속성을 제외한 경우 안된다.
const arrayConcat = <T>(items1: T[], items2: T[]): T[] => {
  return items1.concat(items2);
};

let arr1 = arrayConcat<number>([1, 2, 3, 4], [7, 4, 3, 2]);
//arr1.push(true);

console.log(arr1);
