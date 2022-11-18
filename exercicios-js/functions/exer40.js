function mostraConceito(notas) {
    for(let i in notas){
        if(notas[i] < 0 || notas[i] > 10) console.log(`${(i)}. ${notas[i]} -> Nota inválida`)
        if(notas[i] <= 4.9 && notas[i] >= 0) console.log(`${(i)}. ${notas[i]} -> Conceito D`)
        if(notas[i] <= 6.9 && notas[i] >= 5) console.log(`${i}. ${notas[i]} -> Conceito C`)
        if(notas[i] <= 8.9 && notas[i] >= 7) console.log(`${i}. ${notas[i]} -> Conceito B`)
        if(notas[i] <= 10 && notas[i] >= 9) console.log(`${i}. ${notas[i]} -> Conceito A`)
    }
}

mostraConceito([234.1,4.2,0.5,9.9,0.7,7.4,6.9,8,3.3,10,-1,-0.11])