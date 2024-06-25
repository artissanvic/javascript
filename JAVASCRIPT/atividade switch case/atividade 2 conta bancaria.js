// 2) Desenvolva um programa que pergunte ao usuário o número da sua conta
//  bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3)
//  Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado
//   ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o
//    saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo
//    suficiente. Criar uma variável com um valor que represente o saldo inicial.

let saldoInicial = 1500
let numeroConta
let operacao
let depositar
let sacar
let saldoFinal

numeroConta = prompt('olá usuário! digite o número da sua conta bancária: ')
operacao = prompt('que tipo de operação deseja realizar?\n1) Saldo\n2) Depósito\n3) Saque')

switch (true) {
    case operacao=='1':
        alert(`seu saldo atual é de: R$${saldoInicial}`)
        break

    case operacao=='2':
        depositar = Number(prompt('digite o valor a ser depositado: '))
        saldoFinal = saldoInicial + depositar
        alert(`deposito concluído! saldo atual: R$${saldoFinal} `)
        break

    case operacao=='3': 
        sacar = prompt('digite o valor que deseja sacar: ')

        if (sacar > saldoInicial) {
            alert('saldo insuficiente!')
        } else {
            saldoFinal = saldoInicial - sacar
            alert(`saque concluído! saldo atual: R$${saldoFinal}`)
        }
        break
}