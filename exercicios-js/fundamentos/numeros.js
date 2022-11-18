const peso1 = 4;
const peso2 = Number("6");//Number é uma função

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));


const p1 = 9.234;
const p2 = 7.342;

const notaFinal = ((p1*peso1)+(p2*peso2))/ (peso1+peso2);

console.log(notaFinal.toFixed(2));
console.log(notaFinal.toString(2)); //binário
console.log(notaFinal.toString(16)); //hexa

console.log(7/0);
console.log(0.1 + 0.2); //Não vai dar 0.3 exatamente!!!!!TOMAR CUIDADO!!!!