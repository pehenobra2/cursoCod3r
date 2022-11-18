const jogadores  = ["cr7", "messi", "ney", "haaland"]
jogadores.pop()
console.log(jogadores)

jogadores.push("jão gomes")
console.log(jogadores)

jogadores.shift()//remove o primeiro
console.log(jogadores)

jogadores.unshift("sergio ramos")
console.log(jogadores)

//splice pode adicionar e remover elementos

//adicionar
jogadores.splice(2, 0, "gabi", "arrascaeta")
console.log(jogadores)

//remover
jogadores.splice(3,1)
console.log(jogadores)

const algunsJogadores = jogadores.slice(2)
console.log(algunsJogadores)

const algunsJogadores2 = jogadores.slice(1, 4)
console.log(algunsJogadores2)