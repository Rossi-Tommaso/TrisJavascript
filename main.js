let tabella = Array.from(document.querySelectorAll('.item'));
let giocatore = true; 
let statoGioco = [null, null, null, null, null, null, null, null, null];
let statoPartita = true;


const VITTORIA = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function Win() {
  VITTORIA.forEach((condizione) => {
      let [a, b, c] = condizione;
      if (statoPartita && statoGioco[a]) { // Controllo che la partita sia ancora in corso e che la casella non sia stata ancora cliccata
          if (statoGioco[a] === statoGioco[b] && statoGioco[a] === statoGioco[c]) { // Controllo della vittoria
              statoPartita = false;
              setTimeout(() => {
                  alert(`Il giocatore ${statoGioco[a]} ha vinto!`);
              }, 200);
              return;
          }
      }
  });

  // Controllo pareggio, solo se la partita è ancora in corso
  if (statoPartita && !statoGioco.includes(null)) {
      setTimeout(() => {
          alert('Pareggio');
          statoPartita = false;
      }, 300);
  }
}


tabella.forEach((cella, index) => {//cella é il div, index è la sua posizione nell'array
    cella.addEventListener('click', () => {
      if (!statoGioco[index] && statoPartita) {
        statoGioco[index] = giocatore ? 'X' : 'O';
        
        if(giocatore) {
          let X = document.createElement('div');
          X.classList.add('x');
          cella.appendChild(X);
        }
        else{
          let O = document.createElement('div');
          O.classList.add('o');
          cella.appendChild(O);
        }
        
        Win();
        
        giocatore = !giocatore;
      }
    });
  });

  
  document.querySelector('.reset-button').addEventListener('click', () => {
    location.reload();
});
