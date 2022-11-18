function tratarErro(erro){
    throw 10
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCase() + "!!!")
    } catch (e){
        tratarErro(e)
    } finally {
        console.log("FInal")
    }
}

const obj = { nome: "Pedro"}
imprimirNomeGritado(obj)