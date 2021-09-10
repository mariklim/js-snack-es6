// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//_______________________________________________________________________________________\\

//1. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// 2.Generare numeri random al posto degli 0 nelle proprietà:
const GetNumRandom = (min, max) => Math.floor(Math.random() * (max - min +1 ) ) + min;


const squadre = [
    {
        "nome" : "squadra-1",
        "puntiFatti": 0 ,
        "falliSubiti": 0 
    },
    {
        "nome" : "squadra-2",
        "puntiFatti": 0 ,
        "falliSubiti": 0 
    },
    {
        "nome" : "squadra-3",
        "puntiFatti":0 ,
        "falliSubiti": 0 
    },
    {
        "nome" : "squadra-4",
        "puntiFatti":0,
        "falliSubiti": 0 
    },
];

for(let i = 0; i<squadre.length; i++){
    squadre[i].puntiFatti = GetNumRandom(1,50);
    squadre[i].falliSubiti = GetNumRandom(1,50);

}

//3. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//1. variante senza il ciclo solo destrutturazione passo per passo:


// const arrFalliSubiti = [];

    // const [obj1,obj2,obj3,obj4] = squadre;
    // var sq1 = obj1;
    // var sq2 = obj2;
    // var sq3 = obj3;
    // var sq4 = obj4;
 

    // var {nome, falliSubiti}=sq1;
    // arrFalliSubiti.push(`Nome della squadra: ${nome}, falli subiti: ${falliSubiti}`);

    // var {nome, falliSubiti}=sq2;
    // arrFalliSubiti.push(`Nome della squadra: ${nome}, falli subiti: ${falliSubiti}`);

    // var {nome, falliSubiti}=sq3;
    // arrFalliSubiti.push(`Nome della squadra: ${nome}, falli subiti: ${falliSubiti}`);

    // var {nome, falliSubiti}=sq4;
    // arrFalliSubiti.push(`Nome della squadra: ${nome}, falli subiti: ${falliSubiti}`);

    // console.log(arrFalliSubiti);


// 2. versione con la funzione "extractValue"
// program to extract value as an array from an array of objects

    // function extractValue(arr, prop1, prop2) {

    //   let arrFalliSubiti = [];
    
    //     for (let i=0; i < arr.length ; ++i) {
    
    //         // extract value from property
    //         arrFalliSubiti.push(`nome della squadra: ${arr[i][prop1]}`);
    //         arrFalliSubiti.push(`falli subiti: ${arr[i][prop2]}`);
    //     }
    //     return arrFalliSubiti;
    // }

    // console.log(extractValue(squadre,"nome","falliSubiti"));

// 3. versione con ciclo for e destrutturazione

for (let i=0; i < squadre.length ; ++i){
    const arrFalliSubiti = [];
    const {nome, falliSubiti} = squadre[i];
    arrFalliSubiti.push({
        nome,
        falliSubiti
    });
    console.log(arrFalliSubiti);
}