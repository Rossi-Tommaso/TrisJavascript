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

                const h1 = document.querySelector('.state');
                if (h1)
                    h1.remove();

                const newH1 = document.createElement('h1');
                newH1.className = 'state'
                newH1.innerText = `${stato.statoGioco[a]} ha vinto!`;
                document.body.appendChild(newH1);
                return;
            }
        }
    });

    if (stato.statoPartita && !stato.statoGioco.includes(null)) {

        const h1 = document.querySelector('.state');
        if (h1)
            h1.remove();

        const newH1 = document.createElement('h1');
        newH1.className = 'state'
        newH1.innerText = `Parità`;
        document.body.appendChild(newH1);
    }
}
