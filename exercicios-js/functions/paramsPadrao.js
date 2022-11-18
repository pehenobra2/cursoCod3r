function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(3,5,2), soma1(0,0,0), soma1(123, 312 ,123)) // 0 retorna falso, por isso assume 1

console.log("  ")

function soma2( a, b, c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}

console.log(soma2(), soma2(3), soma2(3,5,2), soma2(0,0,0), soma2(123, 312 ,123)) // na soma2, é a maneira de zero não assumir como falso

console.log("  ")

function soma3(a = 1, b = 1, c = 1){
    return a +b +c
}

console.log(soma3(), soma3(3), soma3(3,5,2), soma3(0,0,0), soma3(123, 312 ,123)) // soma3 é a melhor maneira, pois é o recurso mais atual da linguagem
