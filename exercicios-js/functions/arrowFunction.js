let dobro = function (a){
    return 2 * a
} // funcao normal

dobro = a => 2 *a //funcao arrow, retorno implícito

console.log(dobro(Math.PI))

ola = () => "ola"
ola = _ => "ola" // possui um parametro

console.log(ola())