// Criar um programa para calcular a densidade demográfica 
// (habitantes por quilômetro quadrado) de uma região. Sendo,
//  densidade igual a população (total de habitantes) dividida
//   pela área (quilômetros quadrados). Mostrar mensagens para 
//   densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

let densidade
let populacao
let areaKm

populacao=prompt('digite o total de habitantes: ')
areaKm=prompt('digite o total de quilômetros quadrados: ')

//calculo
densidade=populacao/areaKm

if(densidade>=100){
    alert(`densidade alta (${densidade} habitantes por quilômetro quadrado)`)

}else if(densidade>=25 && densidade <100){
    alert(`densidade média (${densidade} habitantes por quilômetro quadrado)`)

}else if(densidade<25){
    alert(`densidade baixa (${densidade} habitantes por quilômetro quadrado)`)
}