// In un array sono contenuti i nomi degli invitati alla festa del 
// grande Gatsby, chiedi all’utente il suo nome e comunicagli  
// se può partecipare o no alla festa.

// Creare le variabile
const listaNomi = ['Andrei', 'Dumitru', 'Vasile', 'Ion', 'Alexandru'];

const nomeInvitato = prompt('Come ti chiami?');
console.log(nomeInvitato)
let check = false;

for (i = 0; i < listaNomi.length; i++) {
  const element = listaNomi[i];
  console.log(element);
  if (element === nomeInvitato) {
    check = true;
  }
  console.log(check);
}

if (check == true) {
  alert('Puoi entrare BOSS');
} else {
  alert('Amico mio non sei nella lista');
}
