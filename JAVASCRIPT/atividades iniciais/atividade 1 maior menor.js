//Escreva  um programa para ler 2 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let numeroUm
let numeroDois

numeroUm=prompt('digite o primeiro numero: ')
numeroDois=prompt('digite o segundo numero: ')

if(numeroUm>numeroDois){
    alert(`${numeroUm} é o maior número, e ${numeroDois} é o menor número.`)

}else if(numeroUm<numeroDois){
    alert(`${numeroDois} é o maior número, e ${numeroUm} é o menor número.`)
}