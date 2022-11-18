//pesso -> 123(endereço de memória) -> {...}
const pessoa = {nome: "joao"}
pessoa.nome = "pedro"

console.log(pessoa.nome)

Object.freeze(pessoa)//Congela o objeto e não deixa fazer nenhuma modificação

pessoa.nome = "Maria"
pessoa.end = "rua 123"
delete pessoa.nome

console.log(pessoa)


