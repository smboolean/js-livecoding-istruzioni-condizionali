// 1. chiedo all'utente di inserire la prima età
var etaPersona1 = parseInt(prompt("Inserisci l'età della persona 1"));
// 2. chiedo all'utente di inserire la seconda età
var etaPersona2 = parseInt(prompt("Inserisci l'età della persona 2"));

/* 3. se l'età della persona 1 è maggiore dell'età della persona 2 stampo l'età della prima persona
      se l'età della persona 2 è maggiore dell'età della persona 1 stampo l'età della seconda persona
      altrimenti hanno la stessa età */

if (isNaN(etaPersona1) || isNaN(etaPersona2)) {
  alert("occhio hai sbagliato qualcosa!");
} else if (etaPersona1 > etaPersona2) {
  alert("La prima persona è più grande della seconda");
} else if (etaPersona2 > etaPersona1) {
  alert("La seconda persona è più grande della prima");
} else {
  alert("hanno la stessa età");
}
