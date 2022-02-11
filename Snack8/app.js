// Chiedi un numero di 4 cifre all’utente
// calcola la somma di tutte le cifre che compongono il numero.

// Crare le variabile
const numeroUtente = prompt('scrivi un numero di 4 cifre');
console.log(numeroUtente);

const cifre = numeroUtente.split('');
console.log(cifre, 'le 4 cifre dell utente');
const numeri = [];
for (i = 0; i < cifre.length; i++) {
  numeri.push(parseInt(cifre[i]));
}
console.log(numeri, 'le cifre separate');

let totale = 0;

for (i = 0; i < numeri.length; i++) {
  totale += numeri[i];
}
console.log(totale, 'la somma totale delle 4 cifre');
