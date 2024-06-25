// 1) Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

// Sem Geração (até 1945)
// Baby Boomers (nascidos entre 1946 e 1964)
// Geração X (1965-1980)
// Geração Y ou Millennials (1981-1996)
// Geração Z (1997-2010)
// Geração Alfa (a partir de 2011)

let anoNascimento

anoNascimento = prompt('digite o ano em que você nasceu: ')

switch (true) {
    case anoNascimento <= 1945:
        alert('sem geração')
        break

    case anoNascimento >= 1946 && anoNascimento <= 1964:
        alert('baby boomers')
        break

    case anoNascimento >= 1965 && anoNascimento <= 1980:
        alert('geração X')
        break

    case anoNascimento >= 1981 && anoNascimento <= 1996:
        alert('geração Y/Millennials')
        break

    case anoNascimento >= 1997 && anoNascimento <= 2010:
        alert('geração Z')
        break

    case anoNascimento >= 2011:
        alert('geração Alfa')
        break

        default:
    alert('resposta inválida')
    break
}
