const pessoa = {
    saudacao: "bon dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas:  funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()