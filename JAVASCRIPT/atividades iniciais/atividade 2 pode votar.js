//Escreva um programa para ler o ano  de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu)

let anoAtual=2024
let AnoNascimento
let idade

AnoNascimento=prompt('digite o ano em que você nasceu: ')

//calculo
idade=anoAtual-AnoNascimento

if(idade>=18){
    alert('pode votar esse ano')
}else{
    alert('não pode votar esse ano')
}