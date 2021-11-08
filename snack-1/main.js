//1-Creare un oggetto di dati di un basketball player
const basketBallPlayer = [
    {
        gamerCode: '',
        name: 'Kent',
        lastName: 'Bazemore',
        age: 32,
        mPp: '',
        pSt3P: '',

    },
];

//2-Creare funzioni delle statistiche di gioco
//2.1 creare codice giocatore
const codeNumber = 6;
let gamercode = [];
let alfaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

for ( let i = 0; i < codeNumber; i++) {
    gamercode.push(alfaNum.charAt(Math.floor(Math.random() * alfaNum.length)));
}

console.log(gamercode);

//2.2 creare media punti per partita
function mediaPoint() {
    num = Math.round(Math.random() * 51);
    return num;
};
console.log(mediaPoint());

//2.3 creare percentuale successo ai tiri da 3
function success() {
    percentuale = Math.round(Math.random() * 101);
    return percentuale;
};
console.log(success());