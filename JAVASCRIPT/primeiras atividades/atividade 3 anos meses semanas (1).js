/*3) Desenvolva uma programação que peça ao usuário para digitar o 
ano do seu nascimento no formato (YYYY) e o ano atual também no formato
 (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. */

 let anoNascimento
let anoAtual
let mesesanuais = 12
let diasAnuais = 365
let semanasAnuais = 52
let idadePessoaAnos
let idadePessoaMeses
let idadePessoaDias
let idadePessoaSemanas

 anoNascimento = prompt('digite o ano em que você nasceu: ')
 anoAtual = prompt('digite o ano em que estamos: ')

 idadePessoaAnos = anoAtual - anoNascimento
idadePessoaMeses = idadePessoaAnos * mesesanuais
idadePessoaDias = idadePessoaAnos * diasAnuais
idadePessoaSemanas = idadePessoaAnos * semanasAnuais

alert ("você tem aproximadamente " + idadePessoaAnos + ' anos, ' + idadePessoaMeses + ' meses, ' + idadePessoaDias + ' dias, e ' + idadePessoaSemanas + ' semanas de vida.')



