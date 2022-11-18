//não aceita repetição/não indexada
const times = new Set()
times.add("Vasco")
times.add("São paulo").add("Palmeiras").add("Corinthians")
times.add("Flamengo")
times.add("Vasco")

console.log(times)
console.log(times.size)
console.log(times.has("vasco"))
console.log(times.has("Vasco"))
times.delete("Palmeiras")
console.log(times.has("Palmeiras"))

const nomes = ["Raquel", "lucas", "julia", "lucas"]
const nomesSet = new Set(nomes)
console.log(nomesSet)
console.log(nomes)