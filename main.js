let numeroSelezionato = false;

function aggiungiTesto(testo) {
  let display = document.getElementById('resu');
  display.innerText += testo;
  numeroSelezionato = true; // Imposta la variabile a true quando un numero viene selezionato

}

// Funzione per eseguire il calcolo
function calcola() {
  let display = document.getElementById('resu');
  if (numeroSelezionato) {
    let risultato = eval(display.innerText);
    display.innerText = risultato;
    calcoloEseguito = true; // Imposta la variabile a true quando viene eseguito un calcolo

  }
 
}

// Funzione per azzerare il display
function resetta() {
  let display = document.getElementById('resu');
  display.innerText = '';
  numeroSelezionato = false;
  calcoloEseguito = false; // Imposta la variabile a true quando viene eseguito un calcolo

}

// Aggiungi event listener per i bottoni numerici
for (let i = 0; i <= 9; i++) {
  document.getElementById('btn' + i).addEventListener('click', function() {
    aggiungiTesto(i);
  });
}

// Aggiungi event listener per gli operatori
document.getElementById('plus').addEventListener('click', function() {
  if (numeroSelezionato) {
    aggiungiTesto('+');
  }
});

document.getElementById('sub').addEventListener('click', function() {
  if (numeroSelezionato) {
    aggiungiTesto('-');
  }
});

document.getElementById('molt').addEventListener('click', function() {
  if (numeroSelezionato) {
    aggiungiTesto('*');
  }
});

document.getElementById('division').addEventListener('click', function() {
  if (numeroSelezionato) {
    aggiungiTesto('/');
  }
});

document.getElementById('btn.').addEventListener('click', function() {
  if (numeroSelezionato) {
    aggiungiTesto('.');
  }
});

// Aggiungi event listener per il pulsante di reset
document.getElementById('reset').addEventListener('click', function() {
  resetta();
});
document.getElementById('percent').addEventListener('click', function() {
  let display = document.getElementById('resu');
  let valore = parseFloat(display.innerText);

  // Dividi il valore per 100 per ottenere la percentuale
  let percentuale = valore / 100;

  // Aggiorna il display con la percentuale
  display.innerText = percentuale;
});

// Aggiungi event listener per il pulsante di uguale
document.getElementById('result').addEventListener('click', function() {
  calcola();
});

let calcoloEseguito = false;


document.getElementById('result').addEventListener('click', function() {
  if (calcoloEseguito) {

  const numeroCasuale = Math.floor(Math.random() * 3) + 1;
  const img = document.getElementById('img' + numeroCasuale);

  // Mostra l'immagine
  img.style.bottom = '50px'; // La posizione finale dell'immagine
  setTimeout(function() {
    img.style.bottom = '-300px'; // Rimetti l'immagine fuori dallo schermo dopo 8 secondi
  }, 4000); 

}
calcoloEseguito = false;

});


