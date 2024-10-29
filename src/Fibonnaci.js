export function fibo(n) {
  let a = 0;
  let b = 1;
  let i = 2;
  let c;
  const result = [];
  if (n == 1) {
    return a;
  }
  result.push(a, b);

  while (i < n) {
    i = i + 1;
    c = a + b;
    result.push(c);
    a = b;
    b = c;
  }
  return result;
}

console.log(fibo(8))