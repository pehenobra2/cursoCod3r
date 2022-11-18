const escola = "Jesus Maria José"

console.log(escola.charAt(1))
console.log(escola.charAt(0))
console.log(escola.charAt(20))
console.log(escola.charAt(10))

console.log(escola.charCodeAt(1))
console.log(escola.charCodeAt(0))
console.log(escola.charCodeAt(20))
console.log(escola.charCodeAt(10))

console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log(escola.substring(3, 10))

console.log(escola.indexOf('J'))
console.log(escola.indexOf('M'))
console.log(escola.indexOf('é'))
console.log(escola.indexOf('a'))

console.log("Escola ".concat(escola).concat("!"))

console.log("Ana,Maria,Pedro".split(','))

//Template string
const nome = "pedro"
const template = `
olá
${nome}!`

console.log(template)

console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up("cuidado")}!`)