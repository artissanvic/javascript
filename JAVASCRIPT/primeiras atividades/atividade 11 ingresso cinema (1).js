// 11) Um sistema de reservas de ingressos do cinema, que deve permitir que o usuário
// escolha o filme, o horário e o número de ingressos desejados. Após a seleção, deve ser
// exibido o total a ser pago. Exibir ao usuário opções de filmes e horários. Os valores do
// ingresso devem ser pré-definidos
let filme
let horario
let quantIngressos
let valorFinal
let precoIngresso = 24

filme=prompt('filmes disponíveis: \nBarbie live action\nMiranha vs deadpool\nmeninas malvadas\n\nqual filme deseja assistir?: ')

horario=prompt('Horários disponíveis: \n10:00h \n11:00h\n12:00h\n13:00h\n14:00h\n\nem qual horario deseja assistir ao filme?: ')

quantIngressos=prompt('valor do ingresso: R$24\n\nquantos ingressos deseja comprar?: ')

//calculo

valorFinal=quantIngressos*precoIngresso

alert('sua reserva foi concluída! filme: ' + filme + ', às ' + horario + ', ' + quantIngressos + ' ingressos comprados. \nValor da compra: R$' + valorFinal)

