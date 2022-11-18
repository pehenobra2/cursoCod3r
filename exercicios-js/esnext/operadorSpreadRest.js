// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmentro de função
// usar spread com objeto

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total 
}
console.log(total(2,3,4,5))

//operador spread
const funcionario = { nome: "Maria", salario: 1234.56}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ["jão", "Pedro", "Sofia"]
const grupoB = ["Artur", ...grupoA, "Gui"]

console.log(grupoB)
