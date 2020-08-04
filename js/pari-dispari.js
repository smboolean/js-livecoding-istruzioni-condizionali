// 1. chiedo all'utente di scommettere su pari o dispari e lo salvo in una variabile
var scommessa = prompt("Inserisci pari o dispari");
// 2. genero un numero random fra 1 e 10
var numero = Math.floor(Math.random() * 10) + 1;
// console.log("la scelta dell'utente è: " + scommessa);
// console.log("il numero generato è: " + numero);

// 3. verifico se il numero generato è pari o dispari
if(numero % 2 == 0) {
  var numeroPariDispari = "pari";
} else {
  var numeroPariDispari = "dispari";
}

// 4. verifico se l'utente ha vinto
if(scommessa == numeroPariDispari) {
  alert("Hai vinto!!! il numero uscito è: " + numero);
} else {
  alert("Hai perso!!! il numero uscito è: " + numero);
}
