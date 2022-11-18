const moduloA = require("../../moduloA")
const moduloB = require("../../modulob")

console.log(moduloA)
console.log(moduloB)

const http = require("http")
http.createServer((req, res)=>{
    res.write("bom dia")
    res.end()
}).listen(8080)