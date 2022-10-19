//Visualizzare in pagina 5 numeri casuali. 
let numeri = [];
let numeroCasuale;
let numeriMemoryEl = document.querySelector('.numeriMemory');

while (numeri.length != 5 ) { 
   numeroCasuale = Math.floor(Math.random()* 100);
   numeri.push(numeroCasuale);
}
console.log(numeri);
numeriMemoryEl.innerText = numeri;


//Da lì parte un timer di 30 secondi.

let secondi = 30;

const timer =  setInterval(function () {
    if (secondi == 0) {
        clearInterval(timer);
        alert('Tempo scaduto') ;      
        //Dopo 30 secondi i numeri scompaiono
        numeriMemoryEl.remove(numeri);
        
    } else {
        secondi--;
    }

}, 1000);

//e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 

const chiediNumeri = setTimeout(function(){
   let primoNumero = Number(prompt('Inserisci il numero in questa posizione'));
   let secondoNumero = Number(prompt('Inserisci il numero in questa posizione'));
   let terzoNumero = Number(prompt('Inserisci il numero in questa posizione'));
   let quartoNumero = Number(prompt('Inserisci il numero in questa posizione'));
   let quintoNumero = Number(prompt('Inserisci il numero in questa posizione'));

   let numeriUtente = [
    primoNumero,
    secondoNumero,
    terzoNumero,
    quartoNumero,
    quintoNumero];
    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    let punteggioEl = document.querySelector('.punteggio')
    let punteggio = Number(-1);
    for (let i = 0; i <= numeri.length; i++) {
        let numeroAttualePc = numeri[i];
        let numeroAttualeUtente = numeriUtente[i];
        if (numeroAttualePc == numeroAttualeUtente) {
            punteggio++;
        };
        numeroAttualeUtente++;
        numeroAttualePc++;
    }
    console.log('Il tuo punteggio è:', punteggio);
    punteggioEl.innerText ='Hai totalizzato' + ' ' + punteggio + ' ' + 'punti su 5';

    clearTimeout(chiediNumeri);
    
},31000);








