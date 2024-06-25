// 6) Criar um programa que recebe o peso (kg) de um objeto no planeta Terra. Em seguida, 
// apresentar a lista abaixo e pedir ao usuário para digitar o número desejado para escolher
//  outros lugares do sistema solar. Ao final mostrar, o peso desse objeto no lugar selecionado. 
//  Lista de locais (lua e planetas) e gravidades relativas à Terra:

// 1 - 0,06 Plutão
// 2 - 0,17 Lua
// 3 - 0,38 Mercúrio
// 4 - 0,38 Marte
// 5 - 0,91 Vênus
// 6 - 0,92 Urano
// 7 - 1,06 Saturno
// 8 - 1,19 Netuno
//9 - 2,34 Júpiter

let objetoPeso
let lugar
let pesoConvertido

objetoPeso = prompt('digite o peso do objeto que deseja "converter"(em kg)')
lugar = prompt('digite o número correspondente ao lugar que deseja que o peso seja convertido:\n1)plutão\n2)lua\n3)mercurio\n4)marte\n5)vênus\n6)urano\n7)saturno\n8)netuno\n9)júpiter')

switch(lugar){
    case '1':
        //calculo
pesoConvertido=objetoPeso*0.06 //plutao
alert(`${objetoPeso}kg se converte para: ${pesoConvertido.toFixed(3)}kg`)
break

case '2':
    //calculo
pesoConvertido=objetoPeso*0.17 //lua
alert(`${objetoPeso}kg se converte para: ${pesoConvertido.toFixed(3)}kg`)
break

case '3':
    //calculo
pesoConvertido=objetoPeso*0,38 //Mercúrio
alert(`${objetoPeso}kg se converte para: ${pesoConvertido.toFixed(3)}kg`)
break

case '4':
    //calculo
pesoConvertido=objetoPeso*0,38 //Marte
alert(`${objetoPeso}kg se converte para: ${pesoConvertido.toFixed(3)}kg`)
break

case '5':
    //calculo
pesoConvertido=objetoPeso*0,91 //Vênus
alert(`${objetoPeso}kg se converte para: ${pesoConvertido.toFixed(3)}kg`)
break

case '6':
    //calculo
pesoConvertido=objetoPeso*0,92 //Urano
alert(`${objetoPeso}kg se converte para: ${pesoConvertido.toFixed(3)}kg`)
break

case '7':
    //calculo
pesoConvertido=objetoPeso*1,06 //Saturno
alert(`${objetoPeso}kg se converte para: ${pesoConvertido.toFixed(3)}kg`)
break

case '8':
    //calculo
pesoConvertido=objetoPeso*1,19 //Netuno
alert(`${objetoPeso}kg se converte para: ${pesoConvertido.toFixed(3)}kg`)
break

case '9':
    //calculo
pesoConvertido=objetoPeso*2,34 //Júpiter
alert(`${objetoPeso}kg se converte para: ${pesoConvertido.toFixed(3)}kg`)
break
}
