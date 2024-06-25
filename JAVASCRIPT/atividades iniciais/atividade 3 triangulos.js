// Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que: 

// Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
// Triângulo Obtusângulo: possui um ângulo obtuso. (maior que 90º) 
// Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)

let anguloUm
let AnguloDois
let AnguloTRes

anguloUm=prompt('digite o primeiro ângulo: ')
AnguloDois=prompt('digite o segundo ângulo: ')
AnguloTRes=prompt('digite o terceiro ângulo: ')

if(anguloUm==90 || AnguloDois==90 || AnguloTRes==90){
    alert('triângulo reto')

}else if(anguloUm>90 || AnguloDois>90 || AnguloTRes>90){
    alert('triângulo obtusângulo')

}else{
    alert('triângulo acutângulo')
}