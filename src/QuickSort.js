export function quickSort(arr){
  if(arr.length === 0) return "Sem número";
  if(arr.length === 0) return arr;

  const vetor = arr;
  for (let j = 0; j < arr.length - 1; j++) { //Simulando a recursividade
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (vetor[i] > vetor[i + 1]) {
        let aux = vetor[i];
        vetor[i] = vetor[i + 1];
        vetor[i + 1] = aux;
      }
    }
  }
  return vetor;
}

console.log(quickSort([3,1,2]))