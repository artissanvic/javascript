//Faça um programa que solicite o salário e os anos de serviço de um funcionário. 
//Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

let salario
let tempoDeServico
let bonus , porcentagemDoBonus = 15
let divisao = 100

salario=prompt('digite seu salário: ')
tempoDeServico=prompt('a quantos anos você trabalha?: ')


if(tempoDeServico>=5){
//calculo
bonus=porcentagemDoBonus*salario/divisao

alert(`você ganhou um bônus de R$${bonus} (15%)`)
}else{
    alert('sem bonus.')
}


