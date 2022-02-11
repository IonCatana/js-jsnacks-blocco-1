// Calcola la somma e la media dei primi 10 numeri

// Creo le variabile
const X = [];

for (i = 1; i <= 10; i++) {
  const Y = i;
  console.log(Y, 'numeri generati');
  X.push(Y);
}
console.log(X, 'numeri');

let totale = 0;
for (i = 0; i < X.length; i++) {
  totale += X[i];
}
console.log(totale, 'la somma totale');

const media = totale / 10;

console.log(media, 'la media');
