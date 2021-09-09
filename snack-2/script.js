// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//_______________________________________________________________________________________\\

//1. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// 2.Generare numeri random al posto degli 0 nelle proprietà:
const GetNumRandom = (min, max) => Math.floor(Math.random() * (max - min) ) + min;
const numRandom = GetNumRandom(1,50);
console.log(numRandom);

const squadre = [
    {
        "nome" : "squadra-1",
        "puntiFatti": numRandom ,
        "falliSubiti": numRandom ,
    },
    {
        "nome" : "squadra-2",
        "puntiFatti": numRandom ,
        "falliSubiti": numRandom ,
    },
    {
        "nome" : "squadra-3",
        "puntiFatti": numRandom ,
        "falliSubiti": numRandom ,
    },
    {
        "nome" : "squadra-4",
        "puntiFatti": numRandom ,
        "falliSubiti": numRandom ,
    },
];
