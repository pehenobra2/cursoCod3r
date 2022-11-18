//object.preventExtensions
const produto = Object.preventExtensions({
    nome: "qualquer", preco: 1.99, tag: "promocao"
})
console.log("Extensível: ", Object.isExtensible(produto))
console.log(produto)

produto.nome = "borracha"
produto.descricao =  "borracha branca"
delete produto.tag
console.log(produto)

//object.seal

const pessoa = { nome: "pedro", idade: 35}
Object.seal(pessoa)
console.log("Selado: ", Object.isSealed(pessoa))

pessoa.sobrenome = "nogueira"
delete pessoa.nome
pessoa.idade = 22
console.log(pessoa)

//object.freeze = selado  + valores constantes(não pode ser modificado)