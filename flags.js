// g - global (Todos os elementos buscados no texto)
// i - ignore case (busca maiúsculo e minúsculo)

const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/))
console.log(texto.match(/c|ab/i))
console.log(texto.match(/c|ab/gi))