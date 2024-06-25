/*1) Crie um programa que peça os dados de um cliente: Nome, idade, 
nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte 
mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço
 [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.*/
 
 //exercicio 1
 
 let nomePessoa
 let idadePessoa
 let nacionalidadePessoa
 let enderecoPessoa

 nomePessoa = prompt('digite seu nome: ')
 idadePessoa = prompt('digite sua idade: ')
 nacionalidadePessoa = prompt('digite sua nacionalidade: ')
 enderecoPessoa = prompt('digite seu endereço: ')

 alert('\n cliente ' + nomePessoa + ', com ' + idadePessoa + ' anos, ' + nacionalidadePessoa + ', reside no endereço ' + enderecoPessoa)

