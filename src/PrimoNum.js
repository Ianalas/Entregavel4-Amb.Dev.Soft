export function primoNum(n) {
  let cont = 0;

  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        cont = cont + 1;
      }
    }
  }
  return cont == 2 ? true : false;
}