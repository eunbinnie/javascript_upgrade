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
