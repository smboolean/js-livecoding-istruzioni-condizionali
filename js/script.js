// 1. chiedo all'utente la prima parola
var primaParola = prompt("Inserisci la prima parola");
// 2. chiedo all'utente la seconda parola
var secondaParola = prompt("Inserisci la seconda parola");

/* 3. verifico quale parola è più lunga
      se la prima parola è più lunga della seconda
      se la seconda parola è più lunga della prima
      altrimenti le parole sono uguali */
if(primaParola.length > secondaParola.length) {
  alert('La prima parola è più lunga della seconda');
} else if(secondaParola.length > primaParola.length) {
  alert('La seconda parola è più lunga della prima');
} else {
  alert('Le parole sono lunghe uguali');
}
