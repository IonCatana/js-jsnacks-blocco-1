// Il software deve chiedere per 5 volte all’utente di inserire un numero
// Il programma stampa la somma di tutti i numeri inseriti
// Esegui questo programma in due versioni, con il for e con il while.

// Creare la variabile
const numeri = [];

for (i = 0; i < 5; i++){
  let numeroUtente = parseInt( prompt ('Inserisci un numero') )
  numeri.push(numeroUtente)
}
console.log(numeri)

// while (numeri.length <= 4) {
//   let numeroUtente = parseInt(prompt('Inserisci un numero'));
//   if (numeroUtente !== isNaN) numeri.push(numeroUtente);
// }
// console.log(numeri);

let totale = 0;
for (i = 0; i < 5; i++) {
  totale += numeri[i];
}
console.log(totale, 'la somma totale');


