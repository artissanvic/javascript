// 3) Você é um amante da natureza e adora fazer trilhas.
//  Criar um programa que calcule a velocidade média das 
//  trilhas que você realiza. Para isso, devem ser digitados
//   os dados de distância percorrida (quilômetros) e tempo que 
//   a trilha durou (horas). Fazer então o cálculo da velocidade 
//   média e mostrar na tela a mensagem "Sua média de velocidade
//    durante essa trilha foi de X km/h", sendo X a velocidade.

let quilômetros
let horas
let media

quilômetros=prompt('digite a distância percorrida(em quilômetros): ')
horas=prompt('digite o tempo que a trilha durou(em horas): ')

//calculos

media=quilômetros/horas
alert(`sua media de velocidade durante essa trilha foi de ${media} km/h`)
