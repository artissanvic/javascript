// 9) Elabore um programa que converta uma quantidade de dólares para reais.
// Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a
//  conversão para reais na tela. Se a cotação do dólar estiver acima de 5
//   reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.

let dolar
let cotacaoDolar
let reais

dolar=prompt('digite quantos dólares deseja converter: ')
cotacaoDolar=prompt('digite a cotação do dólar: ')

//calculo
reais=dolar*cotacaoDolar

if(cotacaoDolar>5){
    alert(`está caro!\n${dolar} dólares se converte para ${reais} reais.`)

}else if(cotacaoDolar<5){
    alert(`está barato!\n${dolar} dólares se converte para ${reais} reais.`)
}