const aprovados = ["pedro", "sofia", "gui", "artur"]

aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
