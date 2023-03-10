// Optional Chaining

{
  const person1 = {
    name: 'eunbin',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };

  const person2 = {
    name: 'Bob',
  };

  // π©π©π©π©π©π©
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }

    printManager(person1);
    // printManager(person2);  // error
  }

  // π©π©π©
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // π©
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }

    printManager(person1);
    printManager(person2);
  }

  // π
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }

    printManager(person1);
    printManager(person2);
  }
}


// Nullish Coalescing Operator
{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = 'Eunbin';
    const userName = name || 'Guest'
    // μμ κ²μ΄ falseμΌ λλ§ λ€μ κ²μ΄ μ€νλ¨.
    console.log(userName);  // Eunbin
  }

  {
    const name = null;
    const userName = name || 'Guest';
    // μμ κ²(name)μ΄ falseμ.
    console.log(userName);  // Guest

    const num = 0;  // false
    const message = num || 'undefined';
    console.log(message); // undefined
  }

  // π
  {
    // κ°μ΄ μμ λλ§ ?? λ€μ κ² μ¬μ© (null, undefined)
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);  // 

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message); // 0
  }
}