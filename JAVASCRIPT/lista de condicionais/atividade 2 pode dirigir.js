// Crie uma programa que verifique se uma pessoa pode dirigir. 
// Deve ser perguntada a a idade da pessoa e se ela tiver idade
//  suficiente para dirigir (18 anos ou mais), exiba "Você pode
//   dirigir", caso contrário, exiba "Você ainda não pode dirigir".

let idade

idade=prompt('digite sua idade: ')

if(idade>=18){
    alert('pode dirigir!')
}else{
    alert('não pode dirigir')
}