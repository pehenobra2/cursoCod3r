/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão em um array.
 Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, 
que indica o aluno que teve a melhor média das notas */

const estudantes = [{
    nome:"joao",
    notas: [8, 7.6, 8.9, 6]

},{
    nome: "mariana",
    notas: [9, 6.6, 7.9, 8]
},{
    nome: "carla",
    notas: [7, 7, 8, 9]
}]

function media(estudante) {
    const getNotaDaAluno = aluno => aluno.notas
    console.log(getNotaDaAluno.length)
    console.log(estudante.notas)
}

media(estudantes)