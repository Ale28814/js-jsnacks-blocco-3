//A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.

// 1- Creo l'array di numeri
const numbers = [14, 27, 34, 53, 69];

//2- Creo il quadrato dei numeri dell'array
const quadro = numbers.map(number =>{
    return number * number;
});
//3- Stampo il risultato
console.log(quadro);