// 2) Os leões baios são animais territoriais. Seu território compreende 
// cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso 
// o casal costuma dominar uma área de 400km², juntos. Considerando que 
// existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar
//  um programa no qual você deve digitar quantos casais (dados de pesquisa
//      de campo) existem dentre esse total e mostrar na tela a soma geral 
//      de área dominada, incluindo todos indivíduos.
//total de leos - casal . 2


let areaPorCasalTotal, quantosCasais, areaPorCasal=400
let areaPorIndividuoTotal, quantIndividuos, areaPorIndividuo=320
let areaTotalDominada

quantosCasais=prompt('digite quantos casais têm ns reserva?: ')
quanSolteiros=prompt('digite quantos leões solteiros têm na reserva?: ')

//calculos

areaPorCasalTotal=quantosCasais*areaPorCasal
areaPorIndividuoTotal=quantIndividuos*areaPorIndividuo

areaTotalDominada=areaPorCasalTotal+areaPorIndividuoTotal

alert('a area total dominada pelos leões é de: ' + areaTotalDominada + 'km²')



