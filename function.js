// add()
function add(a, b) {
  return a + b;
}

const sum = add(2, 6);
console.log(sum); // 8

const doSomething = add;

const result = doSomething(2, 3);
console.log(result);  // 5
const result2 = add(2, 3);
console.log(result2); // 5

function print() {
  console.log('print');
}

print(3, 5);  // print(아무리 인자를 보내도 x)

function person(name, age) {
  console.log(`${name} ${age}`);
}

person('eunbin', 25); // eunbin 25
console.log('----------------------');


// divide()
function divide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  const result = operator(2, 3);  // add(2, 3), divide(2, 3)
  console.log(result);  // 5
}

surprise(add);  // 함수 전달
surprise(divide); // 0.66666