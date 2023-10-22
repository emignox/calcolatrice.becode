document.addEventListener('DOMContentLoaded', function() {
  let numeroSelezionato = false;
  let calcoloEseguito = false;

  function aggiungiTesto(testo) {
    let display = document.getElementById('resu');
    display.innerText += testo;
    numeroSelezionato = true; 
  }

  function calcola() {
    let display = document.getElementById('resu');
    if (numeroSelezionato) {
      let risultato = eval(display.innerText);
      display.innerText = risultato;
      calcoloEseguito = true;
    }
  }

  function resetta() {
    let display = document.getElementById('resu');
    display.innerText = '';
    numeroSelezionato = false;
    calcoloEseguito = false;
  }

  for (let i = 0; i <= 9; i++) {
    document.getElementById('btn' + i).addEventListener('click', function() {
      aggiungiTesto(i);
    });
  }

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

  document.getElementById('reset').addEventListener('click', function() {
    resetta();
  });

  document.getElementById('percent').addEventListener('click', function() {
    let display = document.getElementById('resu');
    let valore = parseFloat(display.innerText);
    let percentuale = valore / 100;
    display.innerText = percentuale;
  });

  document.getElementById('result').addEventListener('click', function() {
    calcola();
  });

  document.getElementById('result').addEventListener('click', function() {
    if (calcoloEseguito) {
      const numeroCasuale = Math.floor(Math.random() * 3) + 1;
      const img = document.getElementById('img' + numeroCasuale);
      img.style.bottom = '50px'; 
      setTimeout(function() {
        img.style.bottom = '-300px'; 
      }, 4000); 
    }
    calcoloEseguito = false;
  });

  const curiosites = document.querySelectorAll('.curiosite');

  function mostraCuriositeCasuale() {
    const numeroCasuale = Math.floor(Math.random() * curiosites.length);
    const curiositeCasuale = curiosites[numeroCasuale];
    curiosites.forEach(function(curiosite) {
      curiosite.style.display = 'none';
    });
    curiositeCasuale.style.display = 'block';
    setTimeout(function() {
      curiositeCasuale.style.display = 'none';
    }, 7000);
  }

  document.getElementById('result').addEventListener('click', mostraCuriositeCasuale);
});
