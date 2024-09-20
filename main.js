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
        let[a, b, c] = condizione;
        if(statoGioco[a] && statoGioco[a] === statoGioco[b] && statoGioco[a] === statoGioco[c]) {
            //il giocatore statoGioco[a] ha vinto
            //aggiungere messaggio di vittoria
            alert(`il giocatore ${statoGioco[a]} ha vinto`)
            statoPartita = false;
            return
        }

        if (!statoGioco.includes(null)) { //se la tabella non include null (cioé é completa) allora è un pareggio
            statoPartita = false;
        }
    })
}

tabella.forEach((cella, index) => {
    cella.addEventListener('click', () => {
      if (!statoGioco[index] && statoPartita) {
        statoGioco[index] = giocatore ? 'X' : 'O';
        cella.textContent = giocatore ? 'X' : 'O';
        
        Win();
        
        giocatore = !giocatore;
      }
    });
  });

console.log(tabella);
console.log(!null)

