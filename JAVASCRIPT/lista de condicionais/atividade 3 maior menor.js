//Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

let numeroUm
let numeroDois

numeroUm=prompt('digite o primeiro numero: ')
numeroDois=prompt('digite o segundo numero: ')

if(numeroUm>numeroDois){
    alert(`${numeroUm} é o maior número, e ${numeroDois} é o menor número.`)

}else if(numeroUm<numeroDois){
    alert(`${numeroDois} é o maior número, e ${numeroUm} é o menor número.`)

}else if(numeroUm==numeroDois){
    alert('os números são iguais.')
}