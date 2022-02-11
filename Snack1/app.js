// L’utente inserisce due numeri in successione, 2con due prompt Il software stampa il maggiore.

// Creare le variabile
const X = parseFloat(prompt('inserisci un numero'));
const Y = parseFloat(prompt('inserisci un altro numero'));
console.log(X, Y ,'Due numeri scelti dell utente')
let maggiore = X;

if (X < Y) {
  maggiore = Y;
}
console.log(maggiore,  'e il numero maggiore');
