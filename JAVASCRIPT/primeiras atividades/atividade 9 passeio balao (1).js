// 9) Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são
// necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15
// reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito
// somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um
// programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na
// tela o total cobrado pelo passeio

let quantPessoas
let tempoPasseio
let taxaPorPessoa = 20
let gasporMinuto = 2 //metros cubicos
let valorGasPorMetroCubico = 15
let valorTotalGas
let valorTotalTaxa
let valorTotalPasseio

quantPessoas=prompt('digite quantas pessoas vão ao passeio: ')
tempoPasseio=prompt('digite quanto tempo(em minutos) o passeio vai durar: ')

//a cada 1 min eh necessario 2 metros cubicos, e 1 metro cubico vale 15R$

valorTotalTaxa=quantPessoas*taxaPorPessoa
valorTotalGas= tempoPasseio*gasporMinuto*valorGasPorMetroCubico
valorTotalPasseio= valorTotalGas+valorTotalTaxa

alert('o passeio irá custar: R$' + valorTotalPasseio)
