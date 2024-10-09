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
        
        if(stato.giocatore) {// alternanza dei turni
          let X = document.createElement('div');
          X.classList.add('x');
          cella.appendChild(X);
        } 
        
        else {
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
  const h1 = document.querySelectorAll('h1');
  if (h1) 
    h1.forEach((element) => element.remove());

  // stato.statoGioco.forEach((element) => {element = null; console.log(element)});
  stato.statoGioco.forEach((element, index) => stato.statoGioco[index] = null) //perchè così funziona?
  console.log(stato.statoGioco)
  stato.statoPartita = true;
  stato.giocatore = true;
  stato.tabella.forEach((element) => element.innerHTML = '');

  document.querySelector('#demo-button').innerHTML = 'demo mode';
  document.querySelector('#reset-button').innerText = 'reset';
});

document.querySelector('#demo-button').addEventListener('click', () => {
  const h1 = document.querySelector('.state');
  if (h1)
     h1.remove(); 

  stato.statoGioco.forEach((element, index) => stato.statoGioco[index] = null);
  stato.statoPartita = true;
  stato.giocatore = true;
  stato.tabella.forEach((element) => element.innerHTML = '');

  const newH1 = document.createElement('h1');
  newH1.innerText = 'Demo mode';
  newH1.className = 'demo-mode'
  document.body.appendChild(newH1);

  demoMode();
});