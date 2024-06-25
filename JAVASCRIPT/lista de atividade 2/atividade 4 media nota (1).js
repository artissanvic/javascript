// 4) Criar um programa que realize o cálculo de uma média 
// ponderada (considerando o peso da nota) da faculdade. A média
//  é composta por três notas: Atividade Individual, Seminário em 
//  Equipe, Projeto final. O usuário deve digitar as três notas e
//   os seus respectivos pesos. A média deve ser calculada e mostrada na tela.

let notaUm, pesoUm, resultadoUm
let notaDois, pesoDois, resultadoDois
let notaTres, pesoTres, resultadoTres
let quantPesos
let somaNotas
let mediaFinalNota

notaUm=prompt('digite qual foi a sua primeira nota: ')
pesoUm=Number(prompt('digite o peso da primeira nota: '))

notaDois=prompt('digite qual foi a sua segunda nota: ')
pesoDois=Number(prompt('digite o peso da segunda nota: '))

notaTres=prompt('digite qual foi a sua terceira nota: ')
pesoTres=Number(prompt('digite o peso da terceira nota: '))

//calculos
resultadoUm=pesoUm*notaUm

resultadoDois=pesoDois*notaDois

resultadoTres=pesoTres*notaTres

quantPesos= pesoUm+pesoDois+pesoTres

somaNotas= resultadoUm+resultadoDois+resultadoTres

mediaFinalNota=somaNotas/quantPesos

alert(`sua media final final foi de: ${mediaFinalNota}`)
