export function contagem(arr) {
  let n = arr.length;
  let contagem = 0;

  for (let i = 0; i < n; i++) {
    let nota = arr[i];
    if (nota >= 0 && nota <= 100) {
      if (nota >= 50) {
        contagem++;
      }
    }
  }
  return contagem;
}
