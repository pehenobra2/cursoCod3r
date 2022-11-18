const produtos = [
    {nome:"Notebook", preco: 2499, fragil:true},
    {nome:"ipad", preco:4900, fragil:true},
    {nome:"copo de vidro", preco: 12.90, fragil: true},
    {nome:"copo de plastico", preco: 20.00, fragil:false}
]

console.log(produtos.filter(p => p.preco >= 50 && p.fragil == true ))
console.log(produtos.filter(p => p.preco < 50 && p.fragil == false ))
