// 【n方大于12000的最小数字】满足n2>12000的n的最小值是多少？请使用合适的循环语句寻找答案。
var n = 0;
while (true) {
  n++;
  if (Math.pow(n, 2) > 12000) {
    break;
  }
}
console.log(`满足n的平方大于12000的n的最小值是${n}`);
