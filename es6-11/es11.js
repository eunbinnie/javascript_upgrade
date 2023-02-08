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

  // 💩💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }

    printManager(person1);
    // printManager(person2);  // error
  }

  // 💩💩💩
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

  // 💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }

    printManager(person1);
    printManager(person2);
  }

  // 💞
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
    // 앞의 것이 false일 때만 뒤에 것이 실행됨.
    console.log(userName);  // Eunbin
  }

  {
    const name = null;
    const userName = name || 'Guest';
    // 앞의 것(name)이 false임.
    console.log(userName);  // Guest

    const num = 0;  // false
    const message = num || 'undefined';
    console.log(message); // undefined
  }

  // 💞
  {
    // 값이 없을 때만 ?? 뒤의 것 사용 (null, undefined)
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);  // 

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message); // 0
  }
}