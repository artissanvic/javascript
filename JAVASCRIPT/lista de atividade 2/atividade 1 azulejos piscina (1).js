// 1) Seu sonho é construir uma piscina. Para cada metro quadrado,
//  são necessários 120 azulejos. O cálculo de área em metros quadrados,
//   é feito multiplicando a largura pelo comprimento. Digitar os valores 
//   (em metros) da largura e comprimento que deseja a piscina. Mostrar na 
//   tela a quantidade de azulejos que devem ser comprados e o valor total
//    a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.

let largura
let comprimento
let metrosQuadrados
let quantAzulejos
let paraCadaMetro=120
let caixaUnidades = 60
let precoCaixaAzulejo=45.50 
let valorPago

largura=prompt('digite(em metros) o valor da largura que deseja a piscina: ')
comprimento=prompt('digite(em metros) o valor do comprimento que deseja a piscina: ')

//calculos
metrosQuadrados=largura*comprimento

quantAzulejos=metrosQuadrados*paraCadaMetro

valorPago=quantAzulejos/caixaUnidades
valorPago=valorPago*precoCaixaAzulejo

alert(`valor a ser pago: R$ ${valorPago} \n${quantAzulejos} azulejos no total`)