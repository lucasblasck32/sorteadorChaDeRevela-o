let gastoMensal = [
    agua = 235.3,
    luz = 430.60,
    cartão = 2300.65,
    farmacia = 230.52
]

let reciboMensal = [
    salario = 2069.58,
    ticket = 1230.32
]

let somaGasto = gastoMensal.reduce(function(somaGasto, i) {
    return somaGasto + i
});

let somaRecibo = reciboMensal.reduce(function(somaRecibo, i) {
    return somaRecibo + i
});

console.log(somaGasto.toFixed(2))
console.log(somaRecibo.toFixed(2))

function sobraMensal() {
    let soma = somaRecibo - somaGasto

    return soma
}

console.log(soma(somaRecibo, somaGasto))