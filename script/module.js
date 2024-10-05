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

export let stato = {
    tabella: Array.from(document.querySelectorAll('.item')),
    giocatore: true,
    statoGioco: [null, null, null, null, null, null, null, null, null],
    statoPartita: true
};

export function Win() {
    VITTORIA.forEach((condizione) => {
        let [a, b, c] = condizione;
        if (stato.statoPartita && stato.statoGioco[a]) {
            if (stato.statoGioco[a] === stato.statoGioco[b] && stato.statoGioco[a] === stato.statoGioco[c]) {
                stato.statoPartita = false;
                setTimeout(() => {
                    alert(`Il giocatore ${stato.statoGioco[a]} ha vinto!`);
                }, 200);
                return;
            }
        }
    });

    if (stato.statoPartita && !stato.statoGioco.includes(null)) {
        setTimeout(() => {
            alert('Pareggio');
            stato.statoPartita = false;
        }, 300);
    }
  }
  
//per evitare la riproduzione del codice uso questo modulo per salvare tutte la variabile che verranno 
