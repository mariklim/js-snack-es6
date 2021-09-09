// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        "nome": "Silver",
        "peso": 10
    },
    {
        "nome": "Gold",
        "peso": 7
    },
    {
        "nome": "Platinum",
        "peso": 8
    },
    {
        "nome": "Star",
        "peso": 6
    }
];

// la versione con Math.min per cercare il peso minimo, template literal in consol,ma senza destructuring:

let biciPeso = [];
let biciLight;
for(let i = 0; i<bici.length; i++){
    biciPeso.push(bici[i].peso);
    biciLight = (`La bici più leggera è il modello "${bici[i].nome}" e pesa ${Math.min(...biciPeso)} kg`);
}
console.log(biciLight);


// la versione che abbiamo fatto durante la lezione + agginto destructuring :
let biciLeggera = bici[0];

for(let i = 0; i<bici.length; i++){
    if (bici[i].peso < biciLeggera.peso){
        biciLeggera=bici[i];
    }
}

let {nome, peso} = biciLeggera;
console.log(`La bici piu leggera è ${nome} e pesa ${peso} kg`);

// console.log(`La bici piu leggera è ${biciLeggera.nome} e pesa ${biciLeggera.peso} kg`);
