const valores = [7.7, 8.9, 99, 123, 4123]
console.log(valores[0], valores[4])
console.log(valores[123])

valores[123] = 123

console.log(valores[123])

console.log(valores)

valores.push({id:3}, false, null, 'teste')
console.log(valores)


console.log(valores.pop())
console.log(valores.pop())

console.log(valores.length)

delete valores[125]

console.log(valores)

console.log(typeof valores)
