// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// Creo la variabile
const numeriPari = [];
console.log(numeriPari);

for (i = 0; i < 6; i++) {
  numeroUtente = parseInt(prompt('scrivi un numero'));
  console.log(numeroUtente, 'numero scelto dall utente');
  if (numeroUtente % 2 == 0) {
    numeriPari.push(numeroUtente, 'numero paro');
  }
}
console.log(numeriPari);
