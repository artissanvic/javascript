// 6) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

let peso
let altura
let imc

peso=prompt('digite seu peso: ')
altura=prompt('digite sua altura: ')

//calculos
imc = peso / altura * altura

alert('IMC: ' + imc)