// Crie sua função aqui
function oneToNumber(number) {
    const array = []
    for (let i = 0; i < number; i++) {
        array.push(i+1)
    }
    return array
}

// Não altere as linhas abaixo
console.log(oneToNumber(10))
console.log(oneToNumber(5))
console.log(oneToNumber(1))
console.log(oneToNumber(-1))