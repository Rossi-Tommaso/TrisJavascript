import { stato, Win } from './module.js';

export function demoMode() {
    document.querySelector('#demo-button').innerHTML = 'Riavvia';
    document.querySelector('#reset-button').innerText = 'Gioca';

    const TURNS = setInterval(() => {

        let index;

        do {
            index = Math.floor(Math.random() * 9);
        } while (stato.statoGioco[index]);

        stato.statoGioco[index] = stato.giocatore ? 'X' : 'O';
            
        const cella = stato.tabella[index]; 

        if (stato.giocatore) {
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
        
        document.querySelector('#reset-button').addEventListener('click', () => {
            if(TURNS)
              clearInterval(TURNS)
        });
        
        if(!stato.statoPartita){
            // setTimeout(() => {
            //     const h1 = document.querySelector('.state');
            //     if (h1)
            //         h1.remove(); 
            //     stato.statoGioco.forEach((element, index) => stato.statoGioco[index] = null) //perchè così funziona?
            //     stato.statoPartita = true;
            //     stato.giocatore = true;
            //     stato.tabella.forEach((element) => element.innerHTML = '');
            // }, 1000);
            clearInterval(TURNS);
        }
    }, 250);
}