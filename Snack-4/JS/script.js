let num;
let sum=0;

let counter=0;

do {
  num=parseInt(prompt('Inserisci qui un numero di 4 cifre'));
  console.log('cico' + num + 'if num ' + isNaN(num) + 'if length ' + (num <= 9999));
  if (!num){
    break;
  }
  if (isNaN(num) || num > 9999 || num < 1000) {
    alert("Inserisci qui un numero di 4 cifre");
    console.log('if num' + isNaN(num));
  }
} while ((isNaN(num)) || num > 9999 || num < 1000);

num=String(num);

for(let i=0;i<num.length;i++){
  sum+=parseInt(num[i]);
  console.log(sum);
}

// Variante
// const digits = String(num)
//   .split('')
//   .map(Number);
  
// for (i=0; i<digits.length; i++){
//   sum+=parseInt(digits[i]);
// }


alert(`La somma dei numeri che compongono il tuo numero è: ${sum}`);
