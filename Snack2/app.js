// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// Creare le variabile
const parole = [];
while (parole.length !== 2) {
  const parolaA = prompt('scrivi una parola');
  parole.push(parolaA);
  const parolaB = prompt("scrivi un'altra parola");
  parole.push(parolaB);
  
  console.log(parole, parolaA, parolaB)
  
  let maggiore = `${parolaA} è maggiore di ${parolaB}`;

  if (parolaB.length > parolaA.length) {
    maggiore = `${parolaB} è maggiore di ${parolaA}`;
  } else if (parolaA.length === parolaB.length) {
    maggiore = 'identiche';
  }
  console.log(maggiore);
}
