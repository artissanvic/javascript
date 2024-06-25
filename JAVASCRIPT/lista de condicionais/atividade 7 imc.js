// Fazer um programa no qual o usuário digite a sua altura 
// e o seu peso, ao final mostre o IMC (índice de massa corporal)
//  e uma mensagem se está abaixo do peso (IMC menor que 18), na
//   faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).
let altura
let peso
let imc 

altura=prompt('digite sua altura: ')
peso=prompt('digite seu peso: ')

//calculo
imc = peso / (altura * altura)

if(imc<18){
    alert(`seu IMC é de ${imc}, você está abaixo do peso`)

}else if(imc >= 18 && imc <= 25){
    alert(`seu IMC é de ${imc}, você está no peso ideal`)

}else if(imc>25){
    alert(`seu IMC é de ${imc}, você está acima do peso`)
}
