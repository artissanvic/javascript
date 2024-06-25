// 4) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos
//  para que a peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro
//   e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada arremesso e ao
//    final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), 
//    de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1
//     (pseudo-petequeiro) e 0 pontos (nunca petequeiro).

let primeiroArremesso
let segundoArremesso
let terceiroArremesso
let somaPontos

primeiroArremesso=Number(prompt('digite a sua pontuação no primeiro arremesso: '))

segundoArremesso=Number(prompt('digite a sua pontuação no segundo arremesso: '))

terceiroArremesso=Number(prompt('digite a sua pontuação no terceiro arremesso: '))

//calculo

somaPontos=primeiroArremesso+segundoArremesso+terceiroArremesso

switch(true){

case somaPontos == 15:
alert(`${somaPontos} pontos, Deus da peteca!`)
break

case somaPontos <=14 && somaPontos >=10:
    alert(`${somaPontos} pontos, petequeiro profissa!`)
    break

    case somaPontos <=9 && somaPontos >=5:
        alert(`${somaPontos} pontos, petequeiro de final de semana`)
        break

        case somaPontos <=4 && somaPontos >=1:
        alert(`${somaPontos} pontos, pseudo-petequeiro`)
        break

        case somaPontos == 0:
        alert(`${somaPontos} pontos, nunca petequeiro!`)
        break
}