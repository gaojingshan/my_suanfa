// 对象
var obj = {
  a: 1,
  b: 2,
  c: 3,
};

// 变量k存储了字符串c,c必须打引号
var k = 'c';
// 变量当做属性，不能被打点，这种情况下必须使用方括号，不能给变量加引号
console.log(obj[k]);
