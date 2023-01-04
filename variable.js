// number, string, boolean, null, undefined
let number = 2;
let number2 = 2;
console.log(number);  // 2
console.log(number2); // 2

number2 = 3;

console.log(number);  // 2
console.log(number2); // 3


// object
const obj = {
  name: 'eunbin',
  age: 25
};
console.log(obj.name);  // eunbin

let obj2 = obj;
console.log(obj2.name); // eunbin

obj.name = 'jennie';
console.log('-------------------');
console.log(obj.name);  // jennie
console.log(obj2.name); // jennie