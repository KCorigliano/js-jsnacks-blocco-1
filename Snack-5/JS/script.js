let arrayEmpty=[];
let sum=0;

do{
    let yourNum=parseInt(prompt('Inserisci qua un numero'));
    sum+=yourNum;
} while (sum<=50);

alert(`La somma dei tuoi numeri è: ${sum}`);