// false: 0, -0, '', null, undefined
// true: -1(0을 제외한 모든 숫자), 'false'(모든 문자열), [](object)

let num;  // undefined
num = 9;

if (num) {
  console.log('true!');
} else {
  console.log('false!');
}

num && console.log(num);


let obj = {
  name: 'eunbin'
};
if (obj) {
  console.log(obj.name);
}

obj && console.log(obj.name);