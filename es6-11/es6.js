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

// π©
{
  const name = student.name;
  const level = student.level;
  console.log(name, level); // Anna 1
}

// β¨
{
  const { name, level } = student;
  console.log(name, level); // Anna 1

  // λ³μ μ΄λ¦ λ°κΎΈκ³  μΆλ€λ©΄?
  const { name: studentName, level: studentLevel } = student;
  console.log(studentName, studentLevel); // Anna 1

  // array
  const animals = ['πΆ', 'π±'];

  // π©
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
  const fruits1 = ['π', 'π'];
  const fruits2 = ['π', 'π₯'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  const fruit = ['π', 'π', 'π'];
  // κΈ°μ‘΄ λ°°μ΄μ μΆκ°
  fruit.push('π');
  // μλ‘μ΄ λ°°μ΄μ μΆκ°ν΄μ λ§λ€κΈ°
  fruit1 = [...fruit, 'π₯'];

  // object merge
  const dog1 = { dog1: 'πΆ' };
  const dog2 = { dog2: 'π' };
  // β Good Code β¨
  const dog0 = Object.assign(dog1, dog2);
  console.log(dog0);
  // β Better! Code β¨
  const dog = { ...dog1, ...dog2, dog3: 'π©' };
  console.log(dog);
}


// Default parameters
// π£ Default parameter is only for undefined (not null)
{
  // π©
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
// π©
{
  let component;
  if (isCat) {
    component = 'π±';
  } else {
    component = 'πΆ';
  }
  console.log(component);
}

// β¨
{
  const component = isCat ? 'π±' : 'πΆ';
  console.log(component);
  console.log(isCat ? 'π±' : 'πΆ');
}