// 10) Faça um programa que verifique a idade de uma pessoa e forneça
//  um desconto no cinema. Deve ser perguntado o valor do ingresso e 
//  a idade. Se ela tiver 12 anos ou menos, conceda um desconto de 
//  50% no ingresso do cinema. Se ela tiver de 13 a 17 anos, conceda 
//  um desconto de 25%. Caso contrário (18 anos ou mais), não conceda
//   nenhum desconto. Mostrar ao final o valor que a pessoa deve pagar.

let idade
let valorIngresso
let desconto

idade=prompt('digite sua idade: ')
valorIngresso=prompt('digite o valor do ingresso: ')

if(idade<=12){
    //calculo
desconto=valorIngresso/2
    alert(`você recebeu um desconto de 50%!\nvalor do ingresso: R$${desconto}`)

}else if(idade>=13 && idade<=17){
    //calculo
    desconto=25*valorIngresso/100
    desconto=valorIngresso-desconto
    alert(`você recebeu um desconto de 25%!\nvalor do ingresso: R$${desconto}`)

}else{
    alert(`sem desconto para maiores de 18 anos.\nvalor do ingresso: R$${valorIngresso}`)

}