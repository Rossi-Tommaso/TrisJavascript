import { stato, Win } from './module.js';

export function demoMode() {
    document.querySelector('#demo-button').innerHTML = 'Riavvia';
    document.querySelector('#reset-button').innerText = 'Gioca';

    let TURNS = setInterval(async () => {

        let index;
        if(stato.statoPartita) {
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
        }
        else if(!stato.statoPartita){
            setTimeout(() => {
                const h1 = document.querySelector('.state');
                if (h1)
                    h1.remove();
                stato.statoPartita = true;
                stato.tabella.forEach((element) => element.innerHTML = '');
            }, 350);

                stato.statoGioco.forEach((element, index) => stato.statoGioco[index] = null)
                stato.giocatore = true;
            
        }
               
        document.querySelector('#reset-button').addEventListener('click', () => {
            if(TURNS)
              clearInterval(TURNS)
        });
        
        
    }, 500);
}