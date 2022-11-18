//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // vai dar NaN pq o b vai assumir o valor undefined
imprimirSoma(2,3,4,1,3,4) //Vai somar os dois primeiros e o resto vai ignorar

//Função com retorno

function soma(a, b = 0){
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) //NaN pq o a não foi definido
