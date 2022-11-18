class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao  = "Professor"){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(sobrenome, profissao){
        super(sobrenome)
        this.profissao = profissao
    }
}

const filho = new Filho
filho.sobrenome = "nogueira"
filho.profissao = "Dev"
console.log(filho)