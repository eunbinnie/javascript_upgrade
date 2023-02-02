// basic
{

  // 함수 선언
  function doSomething() {
    console.log('hello');
  }

  function add(a, b) {
    const sum = a + b;
    return sum;
  }

  // 함수 호출
  doSomething();

  const result = add(1, 2);
  console.log(result);

}
console.log('======================');


// 함수를 인자로 전달
{

  function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
  }

  doSomething(add);

}
console.log('======================');


const addFun = add;
console.log(add);
console.log(addFun(1, 2));