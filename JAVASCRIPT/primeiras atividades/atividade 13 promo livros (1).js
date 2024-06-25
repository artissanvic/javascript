// 13) Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a)
// comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3
// livros e mostra na tela o total dos livros sem desconto e com desconto.

let livroUm
let livroDois
let livroTres
let valorTotal
let comDesconto
let desconto
let porcentagemDeDesconto = 0.15

livroUm= Number(prompt('qual o valor do primeiro livro?: '))

livroDois=Number(prompt('qual o valor do segundo livro?: '))

livroTres=Number(prompt('qual o valor do terceiro livro?: '))

//calculos

valorTotal = livroUm + livroDois + livroTres
comDesconto = valorTotal * porcentagemDeDesconto
desconto = valorTotal - comDesconto

alert("valor total sem desconto: " + valorTotal)
alert("valor total da compra com desconto: " + desconto )