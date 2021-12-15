const num=parseInt(prompt('Inserisci qui un numero di 4 cifre'));
let sum=0;

let counter=0;

// do {
//     num=parseInt(prompt('Inserisci qui un numero di 4 cifre'));
//     if (isNaN(num) || (num.length !== 4)) {
//         alert("Inserisci qui un numero di 4 cifre");
//     }
// } while ((isNaN(num)) || !(num.length == 4));

const digits = String(num)
  .split('')
  .map(Number);
  
for (i=0; i<digits.length; i++){
  sum+=parseInt(digits[i]);
}


alert(`La somma dei numeri che compongono il tuo numero è: ${sum}`);
