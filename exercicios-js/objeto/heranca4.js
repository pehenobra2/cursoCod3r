function MeuObjeto() {}

const obj1 = new MeuObjeto

MeuObjeto.prototype.nome = "anonimo"
MeuObjeto.prototype.falar = function() {
    console.log(`BOm dia! Meus nome é ${this.name}!`)
}

obj1.falar()

const obj2 = {}
obj2.__proto__ = MeuObjeto.prototype
obj2.nome = "obj2"
obj2.falar()

// resumindo a loucura
console.log((new MeuObjeto).__proto__ ===  MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)