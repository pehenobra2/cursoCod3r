//Quando criado um objeto a variavel aponta para o endereço de memória do objeto
const prod1 = { }   //par de chaves cria um objeto

prod1.nome = "pedro"
prod1.idade = 22
prod1.dataNascimento = "29/08/2000"

console.log(prod1)
console.log(prod1.nome, prod1.idade, prod1.dataNascimento)

const prod2 = {
    nome: "Sofia",
    idade: 19,
    obj: {
        variavel: 1,
        obj: {
            av: 2
        }
    }
}

console.log(prod2)
console.log(prod2.obj.variavel, prod2.obj.obj.av)