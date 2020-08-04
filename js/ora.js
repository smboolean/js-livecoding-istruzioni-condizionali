// 1. genero la data
var data = new Date();
// 2. definisco quanti minuti ci sono in un'ora
var minutiTot = 60;
// 3. recupero i minuti dall'oggetto data precedentemente istanziato
var minutiAttuali = data.getMinutes();
// 4. sottraggo i minuti di un'ora con quelli attuali
var minutiRimanenti = minutiTot - minutiAttuali;
// 5. stampo il risultato
console.log(minutiRimanenti);
