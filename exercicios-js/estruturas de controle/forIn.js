const notas = [6.4, 6.2, 42.1, 2423, 42344,1]

for (i in notas){ //percorre pelos índices
    console.log(i, notas[i])
}


const pessoa = {
    nome: "pedro",
    idade: 12,
    peso:65
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
