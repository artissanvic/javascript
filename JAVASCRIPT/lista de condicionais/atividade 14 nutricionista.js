// // 4) Um nutricionista precisa controlar a dieta para pacientes celíacos
//  (intolerantes à glúten) e pacientes com intolerância à lactose. Criar 
//  um programa onde o paciente deve digitar seu nome e em seguida responder
//   se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda 
//     pergunta). Validar as respostas de SIM e NÃO para letras maiúsculas e
//      minúsculas. Em seguida coletar os dados de 3 alimentos, sendo digitado 
//      o nome do alimento, se ele contém glúten ou não e se ele contém lactose 
//      ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados 
//      "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".

let nomePaciente
let intoleranteLac, intoleranteGluten
let respostaLac, respostaGluten
let alimentoProibido = false

nomePaciente = prompt('digite seu nome: ')
intoleranteLac = prompt('você é intolerante a lactose?(SIM/NÂO): ')
intoleranteGluten = prompt('você é intolerante a glúten?(SIM/NÂO): ')

prompt('digite o nome do primeiro alimento: ')
respostaLac = prompt('esse alimento possui lactose?(SIM/NÂO): ')
respostaGluten = prompt('esse alimento possui glúten?(SIM/NÂO): ')

if (respostaLac == 'sim' || respostaLac == 'SIM' || respostaGluten == 'sim' || respostaGluten == 'SIM') {
    alimentoProibido = true
}

prompt('digite o nome do segundo alimento: ')
respostaLac = prompt('esse alimento possui lactose?(SIM/NÂO): ')
respostaGluten = prompt('esse alimento possui glúten?(SIM/NÂO): ')

if (respostaLac == 'sim' || respostaLac == 'SIM' || respostaGluten == 'sim' || respostaGluten == 'SIM') {
    alimentoProibido= true
}

prompt('digite o nome do terceiro alimento: ')
respostaLac = prompt('esse alimento possui lactose?(SIM/NÂO): ')
respostaGluten = prompt('esse alimento possui glúten?(SIM/NÂO): ')

if (respostaLac == 'sim' || respostaLac == 'SIM' || respostaGluten == 'sim' || respostaGluten == 'SIM') {
    alimentoProibido = true
}

if (alimentoProibido == true) {
    alert('Dieta inadequada, contém alimentos aos quais o paciente é intolerante!')

} else {
    alert('Dieta adequada!')
}