//5) Uma cidade pretende apurar os votos de sua eleição. 
// Faça um programa para ler o número total de eleitores. Em
//  seguida o número de votos do candidato X, o número de votos
//  do candidato Y, total de votos brancos e total de votos nulos 
//  (a soma desses quatro, deve ser igual ao total de eleitores). 
//  Calcular e escrever o percentual que cada um representa em 
//  relação ao total de eleitores. 

let totalEleitores
let votosCadidatoX
let votosCandidatoY
let votosBranco
let votosNulos
let percentualEleitoresX
let percentualEleitoresY
let percentualBranco
let percentualNulo

votosCadidatoX = Number(prompt('digite quantos votaram no candidato X: '))

votosCandidatoY= Number(prompt('digite quantos votaram no candidato Y: '))

votosBranco= Number( prompt('digite quantos votos foram brancos: '))

votosNulos= Number(prompt('digite quantos votos foram nulos: '))

//calculos
totalEleitores = votosCadidatoX + votosCandidatoY + votosNulos + votosBranco

    //calculos
    percentualEleitoresX = votosCadidatoX / totalEleitores
    percentualEleitoresX = percentualEleitoresX * 100

percentualEleitoresY = votosCandidatoY / totalEleitores
percentualEleitoresY = percentualEleitoresY * 100

percentualBranco = votosBranco / totalEleitores
percentualBranco = percentualBranco * 100

percentualNulo = votosNulos / totalEleitores
percentualNulo = percentualNulo * 100

alert('foram ' + totalEleitores + ' votos no total.')
alert('os votos do candidato X representam ' + percentualEleitoresX + '% dos votos')
alert('\nos do candidato Y representam ' + percentualEleitoresY + '%')
alert('\nos brancos representam ' + percentualBranco + '%')
alert('\n e os nulos representam ' + percentualNulo + '%.')
