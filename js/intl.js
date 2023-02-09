const views = 9763888;

const formatter = new Intl.NumberFormat('ko');
console.log(formatter.format(views)); // 9,763,888

const formatter2 = new Intl.NumberFormat('ko', { notation: 'compact' });
console.log(formatter2.format(views));  // 976만

const formatter3 = new Intl.NumberFormat('en');
console.log(formatter3.format(views)); // 9,763,888

const formatter4 = new Intl.NumberFormat('en', { notation: 'compact' });
console.log(formatter4.format(views));  // 9.8M