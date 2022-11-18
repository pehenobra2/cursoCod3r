function criarProduto(nome, preco){
    return  {
        nome, 
        preco, 
        desconto: 0.1
    }
}

console.log(criarProduto("notebook", 2099.99))
console.log(criarProduto("ipad", 1200.00))