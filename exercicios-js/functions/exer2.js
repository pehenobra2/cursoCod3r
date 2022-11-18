function triangulo( lado1, lado2, lado3){
    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3) return console.log("É equilatero")
    if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3) return console.log("É escaleno")
    else return console.log("É isósceles")
}

triangulo(1,2,3)
triangulo(3,2,1)
triangulo(1,2,1)
triangulo(4,4,4)