const pessoa = {
    nome: "ana",
    idade: 12,
    endereco: {
        rua: "qne 44",
        numero: 123
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)
console.log(pessoa)

const{ sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)
console.log(pessoa)

function rand( { min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min:  40}

console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))