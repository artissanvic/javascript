// 3) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50.
//  A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% 
//  de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) 
//  Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios.
//   Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4).
//    Mostrar na tela o valor da compra de acordo com a opção escolhida.

let freteFixo = 12.50
let assinantePremiumPorcentagemDesconto = 20 //desconto de 20%, frete gratis
let assinanteGoldPorcentagemDesconto = 20 //desconto de 20% e paga frete
let assinanteSilverPorcentagemDesconto= 10 //desconto de 10% e paga frete
let valorCompra
let valorFinal
let categotiaAssinante
let desconto
valorCompra=Number(prompt('digite o valor de sua compra: '))
categotiaAssinante=prompt('em qual categoria de assinante você está? digite o número correspondente: \n1) Assinante premium\n2) Assinante gold\n3) Assinante silver\n4) Não assinante')

switch(categotiaAssinante){

case '1': 
//calculo
desconto=assinantePremiumPorcentagemDesconto*valorCompra/100
valorFinal= valorCompra-desconto
alert(`O valor total da sua compra foi de: R$${valorFinal}`)
break

case '2': 
//calculo
desconto=assinanteGoldPorcentagemDesconto*valorCompra/100
valorFinal= valorCompra-desconto
valorFinal= valorFinal+freteFixo
alert(`O valor total da sua compra foi de: R$${valorFinal}`)
break

case '3':
    desconto=assinanteSilverPorcentagemDesconto*valorCompra/100
    valorFinal= valorCompra-desconto
    valorFinal=valorFinal+freteFixo
    alert(`O valor total da sua compra foi de: R$${valorFinal}`)
    break

    case '4':
        valorFinal=valorCompra+freteFixo
        alert(`O valor total da sua compra foi de: R$${valorFinal}`)
        break

        default:
        alert('resposta inválida.')
        break
    
      
}


