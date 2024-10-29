export function MDC(a, b) {
  [a, b] = [Number(a), Number(b)];
  let div, maior;

  if (a > b) {
    maior = a;
  } else {
    maior = b;
  }
  for (let i = 1; i <= maior; i++) {
    if (a % i == 0 && b % i == 0) {
      div = i;
    }
  }
  return div;
}
