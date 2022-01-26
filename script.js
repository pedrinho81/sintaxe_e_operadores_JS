let n1 = 7
let n2 = 8


function PrimeiraFrase(n1,n2) {
    let saoIguais = ""
    if(n1 != n2) {
        saoIguais = "não"
    }
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
}


function SegundaFrase(n1, n2) {
    let resultado = n1 + n2

    const segundaFrase = verificacao(resultado)

    return segundaFrase
}

function verificacao(resultado) {

    maior20 = ""

    if(resultado > 20) {
        maior20 = "maior que 20"
    } else {
        maior20 = "menor que 20"
    }

    maior10 = ""


    if(resultado > 10 ) {
        maior10 = "maior que 10"
    } else {
        maior10 = "menor que 10"
    }

    return `Sua soma é ${resultado}, que é ${maior10} e ${maior20}.`

}


///
const primeiraFrase = PrimeiraFrase(n1, n2)
const segundaFrase = SegundaFrase(n1,n2)

function FraseFinal() {
    console.log(`${primeiraFrase} ${segundaFrase}`)
}


FraseFinal()

