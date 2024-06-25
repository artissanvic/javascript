// Desenvolver um programa que receba um número inteiro e verifique se ele é
//  múltiplo de 3. Após digitar o número, mostrar uma das seguintes mensagens
//   na tela “É múltiplo de 3!” ou “Não é múltiplo de 3”.

let numero
let resto 
let divisao=3

numero=prompt('digite o número: ')

//calculos
resto=numero % divisao

if(resto==0){
    alert('é múltiplo de 3!')
}else{
    alert('não é múltiplo de 3!')
}

