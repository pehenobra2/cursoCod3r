const escola = [{
    nome: "turma m1",
    alunos: [{
        nome:"gustavo",
        nota: 8.1
    },{
        nome:"ana",
        nota:9.1
    }]
},  {
    nome: "turma m2",
    alunos: [{
        nome: "rebeca",
        nota:8.9
    },{
        nome:"Roberto",
        nota:7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)