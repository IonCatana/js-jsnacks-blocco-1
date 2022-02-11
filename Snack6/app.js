// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

// Creo la variabile
const N = parseInt(prompt('digita un numero'));

for (i = 1; i <= N; i++) {
  const numero = [i];
  let numeroAlCubo = [i] ** 3;
  console.log(numeroAlCubo,'resultato al cubo');
}