aprovados = ["pedro", "sofia", "cris", "gui", "robson", "artur"]

aprovados[6] = "marlinda"
aprovados.push("anacleto")
console.log(aprovados.length)

aprovados[9] = "terezinha"
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

numeros = [1,4,2,5,2,3,6,34,2,5,342]
numeros.splice(1,5, "numero1", "numero2", "numero3")
console.log(numeros)
