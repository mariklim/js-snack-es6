// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



// FUNZIONI

const GetPosition = (min, max, arr) => {
    const newArr = arr.filter((element, index) => 
    {if (index>=min && index<=max) {
        return true;
    }
        return false;
    });
    console.log(newArr);

};

// PROGRAMMA PRINCIPALE

const myArr = [1,2,3,4,5];
const arrString = ["a","b","c","d","f"];

alert("inserisci due numeri tra 1 e 5, il primo numero deve essere più piccolo del secondo");
let min = parseInt(prompt("Inserisci il primo numero"));
while(isNaN(min) == true){
  min = parseInt(prompt("Errore,Inserisci il primo numero"));
}
let max= parseInt(prompt("Inserisci il secondo numero"));
while(min > max || (isNaN(max) == true)){
max = parseInt(prompt("Errore,il secondo numero che deve essere più grande del primo"));
}




console.log(GetPosition(min, max, myArr));
console.log(GetPosition(min, max, arrString));





