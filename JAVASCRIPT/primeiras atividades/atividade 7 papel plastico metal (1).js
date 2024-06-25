//7) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico 
// rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal
//  rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada
//   material que deseja entregar na fábrica e mostrar o total que receberá em reais. 

let plasticoKg, cadaKgPlastico = 0.20 //se 10kg valem 2.00, 1kg vale 0.20 (dividindo 2,00 por 10)
let papelKg, cadaKgPapel = 0.10 //se 30kg valem 3.00, 1kg vale 0.10 (dividindo 3,00 por 30)
let metalKg, cadaKgMetal = 0.10 //se 50kg valem 5.00, 1kg vale 0.10 (dividindo 5,00 por 50)
let valorPlastico, valorPapel, valorMetal, valorTotal

plasticoKg=Number(prompt('digite a quantidade de plástico(em kg) que deseja entregar: '))
papelKg=Number(prompt('digite a quantidade de papel(em kg) que deseja entregar: '))
metalKg=Number(prompt('digite a quantidade de metal(em kg) que deseja entregar: '))

//calculos
valorPlastico=plasticoKg*cadaKgPlastico
valorPapel=papelKg*cadaKgPapel
valorMetal=metalKg*cadaKgMetal
valorTotal=valorPlastico+valorPapel+valorMetal

alert(' o total a ser recebido é de R$' + valorTotal)

