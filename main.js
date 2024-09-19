let tabella = document.querySelectorAll('.clickable-div');
let giocatore = true;
tabella.forEach((element) => {
    let value = true;
});

tabella.forEach((element) => {
    element.addEventListener('click', () => {
        

        console.log('cliccato', element.id)   
        if(giocatore){
            //crea span icona cerchio
        } else {
            //crea span icona croce
        }

        
    });
});

console.log(tabella[0].value);



