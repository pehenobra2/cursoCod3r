// Let tem escopo de bloco tbm e o var não, var só tem escopo de função e global
let numero = 1
{
    let numero = 2
    console.log("Dentro = ", numero)
}
console.log("Fora = ", numero)

let numero2 = 1

{
    let numero3 = 2
    console.log("Dentro = ", numero2)
}

for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log("i = ", i)
console.log("")
for(let x = 0; x < 10; x++){
    console.log(x)
}
console.log("x = ", x) // em let x só é declarada dentro do bloco