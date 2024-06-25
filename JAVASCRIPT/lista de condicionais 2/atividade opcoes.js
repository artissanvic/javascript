//1) Fazer um programa onde o usuário pode acessar as seguintes opções:

// A) Falar com a atendente    B) Falar com o RH
// C) Falar com o gerente       D) Sair

let opcao

opcao = prompt('digite o que deseja fazer: \nA) falar com a atendente\nB) falar com o RH\nC) falar com o gerente\nD)sair').toUpperCase()
switch (opcao) {

    case 'A':
        alert('você escolheu falar com a atendente')
        break

    case 'B':
        alert('você escolheu falar com o RH')
        break

    case 'C':
        alert('você escolheu falar com o gerente')
        break

    case 'D':
        alert('você saiu.')
}