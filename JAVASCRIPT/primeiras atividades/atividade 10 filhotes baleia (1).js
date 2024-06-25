// 10) As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em
// média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.
// Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes
// de uma baleia dessa espécie por década.

let totalFilhotes
let mediaPorDecada
let mediaTempoDeVida = 200
let tempoDeReproducao = 4
let decada = 10

//total de filhotes ao longo da vida
totalFilhotes  = mediaTempoDeVida / tempoDeReproducao

//media por decada

mediaPorDecada = totalFilhotes / mediaTempoDeVida / decada

alert("ao longo da vida, em 200 anos, a baleia terá em média " + totalFilhotes + " filhotes ao todo, e " + mediaPorDecada + " filhotes por década.")
