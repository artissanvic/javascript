// 15) Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", 
// revezamento em equipes, com equipes de 4 integrantes. O percurso tem um total de 140km, sendo
//  dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira
//   do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), 
//   Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). Criar um programa que recebe o nome da equipe, 
//   em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho.
//    Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) 
//    com duas casas após a vírgula. Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem
//     "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem
//      "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem
//       "Desempenho excelente. Parabéns!"

let nomeEquipe
let nomeIntegranteUm, trechoUmTempo, trechoUmDistancia = 30
let nomeIntegranteDois, trechoDoisTempo, trechoDoisDistancia = 45
let nomeIntegranteTres, trechoTresTempo, trechoTresDistancia = 30
let nomeIntegranteQuatro, trechoQuatroTempo, trechoQuatroDistancia = 35
let distanciaTotal = 140
let mediaUm, mediaDois, mediaTres, mediaQuatro, mediaGeral
let tempoTotal

nomeEquipe = prompt('digite o nome da equipe?: ')

nomeIntegranteUm = prompt('digite o nome do primeiro integrante: ')
trechoUmTempo = Number(prompt('quantas horas ele levou para percorrer o trecho 1?: '))

nomeIntegranteDois = prompt('digite o nome do segundo integrante: ')
trechoDoisTempo = Number( prompt('quantas horas ele levou para percorrer o trecho 2?: '))

nomeIntegranteTres = prompt('digite o nome do terceiro integrante: ')
trechoTresTempo =Number(prompt('quantas horas ele levou para percorrer o trecho 3?: '))

nomeIntegranteQuatro = prompt('digite o nome do quarto integrante: ')
trechoQuatroTempo = Number(prompt('quantas horas ele levou para percorrer o trecho 4?: '))

//calculos

mediaUm = trechoUmDistancia / trechoUmTempo
mediaDois = trechoDoisDistancia / trechoDoisTempo
mediaTres = trechoTresDistancia / trechoTresTempo
mediaQuatro = trechoQuatroDistancia / trechoQuatroTempo
tempoTotal= trechoUmTempo+trechoDoisTempo+trechoTresTempo+trechoQuatroTempo
mediaGeral = distanciaTotal/tempoTotal

alert(`velocidade média de cada integrante:\n${nomeIntegranteUm}: ${mediaUm}km/h\n${nomeIntegranteDois}: ${mediaDois}km/h\n${nomeIntegranteTres}: ${mediaTres}km/h\n${nomeIntegranteQuatro}: ${mediaQuatro}km/h`)
if(mediaGeral<15){
    alert(`media geral: ${mediaGeral}km/h\nDesempenho pode melhorar bastante!`)

}else if(mediaGeral>=15 && mediaGeral <=18){
    alert(`media geral: ${mediaGeral}km/h\nDesempenho bom, mas ainda pode melhorar!`)

}else if(mediaGeral>18){
    alert(`media geral: ${mediaGeral}km/h\nDesempenho excelente. Parabéns!`)
}


