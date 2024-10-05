import { stato, Win } from './module.js';
import { demoMode } from './demo.js';

/*
stato è un oggetto che contiene:
  -tabella: Array.from(document.querySelectorAll('.item')),
  -giocatore: true,
  -statoGioco: [null, null, null, null, null, null, null, null, null],
  -statoPartita: true

Win è una funzione che controlla la vittoria

dentro module.js c'è VITTORIA, un array che contiene tutti i casi di vittoria possibile nella tabella 9x9:
  -   [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
*/

Win();

stato.tabella.forEach((cella, index) => {
    cella.addEventListener('click', () => {
      if (!stato.statoGioco[index] && stato.statoPartita) {
        stato.statoGioco[index] = stato.giocatore ? 'X' : 'O';
        
        if(stato.giocatore) {
          let X = document.createElement('div');
          X.classList.add('x');
          cella.appendChild(X);
        } else {
          let O = document.createElement('div');
          O.classList.add('o');
          cella.appendChild(O);
        }
        
        Win();
        
        stato.giocatore = !stato.giocatore;
      }
    });
});

document.querySelector('#reset-button').addEventListener('click', () => {
    location.reload();
});


document.querySelector('#demo-button').addEventListener('click', () => {
  let h1 = document.createElement('h1');
  h1.innerText = 'Demo mode';
  document.body.appendChild(h1);
  demoMode();
});