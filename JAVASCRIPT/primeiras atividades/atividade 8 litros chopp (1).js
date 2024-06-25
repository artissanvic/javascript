// 8) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. 
// Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule 
// a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp 
// (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados 
// devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha
//  sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos
//   por pessoa na festa.

let litroChopp = 300
let quantPessoas = 45
let litrosDesperdiçados
let litrosSobras
let mediaLitroPorPessoa

litrosDesperdiçados=prompt('digite quantos litros foram desperdiçados: ')
litrosSobras=prompt('digite quantos litros sobraram: ')

mediaLitroPorPessoa = litroChopp - litrosDesperdiçados - litrosSobras
mediaLitroPorPessoa= mediaLitroPorPessoa/quantPessoas

alert('a media de litros por pessoa foi de: ' + mediaLitroPorPessoa)