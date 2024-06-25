//Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
// - "Infantil A" de 5 a 10 anos de idade
// - "Juvenil A" de 11 a 17 anos de idade
// - "Senior" com 18 anos de idade ou mais

let idade

idade=prompt('digite sua idade: ')

if(idade>=5 && idade<=10){
    alert('Infantil.')
    
}else if(idade>=11 && idade<=17){
    alert('Juvenil.')

}else if(idade>=18){
    alert('Senior.')}