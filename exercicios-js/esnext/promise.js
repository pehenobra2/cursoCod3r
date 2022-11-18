function  falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
            reject("Promessa não cumprida")
        }, segundos*1000)
    })
}
falarDepoisDe(3, "Que legal!")
    .then(frase => frase.concat("?!?"))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))