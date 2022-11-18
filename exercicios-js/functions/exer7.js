function bhaskara( a, b, c) {
    const delta = (Math.pow(b, 2)) - (4*a*c)
    const calculo1 = (-b + (Math.sqrt(delta)))/(2*a)
    const calculo2 = (-b - (Math.sqrt(delta)))/(2*a)
    if(delta < 0) return console.log("Delta é negativo")
    else {
        console.log(calculo1.toFixed(2), calculo2.toFixed(2))
    }
}

bhaskara(3, -5, 12)
bhaskara(3,5,12)
bhaskara(1, 34, 2)
bhaskara(1, -3, 1)