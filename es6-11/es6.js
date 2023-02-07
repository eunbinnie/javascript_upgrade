// Shorthand property names
{
  const eunbin1 = {
    name: 'eunbin',
    age: 25,
  };

  const name = 'eunbin';
  const age = 25;

  const eunbin2 = {
    name: name, // eunbin
    age: age, // 25
  };

  const eunbin3 = {
    name, // eunbin
    age,  // 25
  }

  console.log(eunbin1, eunbin2, eunbin3);
}


// Destructuring assignment
// object
const student = {
  name: 'Anna',
  level: 1,
};

// 💩
{
  const name = student.name;
  const level = student.level;
  console.log(name, level); // Anna 1
}

// ✨
{
  const { name, level } = student;
  console.log(name, level); // Anna 1

  // 변수 이름 바꾸고 싶다면?
  const { name: studentName, level: studentLevel } = student;
  console.log(studentName, studentLevel); // Anna 1

  // array
  const animals = ['🐶', '🐱'];

  // 💩
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  {
    const [first, second] = animals;
    console.log(first, second);
  }
}


// Spread Syntax
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  const obj4 = { ...obj2 };
  console.log(obj2, obj4);
  obj2.key = 'hello';
  console.log(obj2, obj4);

  // array concatenation
  const fruits1 = ['🍓', '🍍'];
  const fruits2 = ['🍌', '🥝'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog1: '🐶' };
  const dog2 = { dog2: '🐕' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}


// Default parameters
{
  // 💩
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }
}


// Ternary Operator
const isCat = true;
// 💩
{
  let component;
  if (isCat) {
    component = '🐱';
  } else {
    component = '🐶';
  }
  console.log(component);
}

// ✨
{
  const component = isCat ? '🐱' : '🐶';
  console.log(component);
  console.log(isCat ? '🐱' : '🐶');
}