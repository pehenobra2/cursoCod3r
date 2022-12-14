class Lancamento {
    constructor(nome = "Genérico", valor =  0 ){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes =  mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("salario", 45000)
const contaLUz = new Lancamento("luz", -300)

const contas = new CicloFinanceiro(10, 2022)
contas.addLancamentos(salario, contaLUz)
console.log(contas.sumario())