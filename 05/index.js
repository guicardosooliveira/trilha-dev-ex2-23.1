// Crie sua função aqui
function evenArray(number) {
    const evenArray = []

    for (let i = 0; i <= number; i += 2) {
        evenArray.push(i)
    }
    return evenArray
}

// Não altere as linhas abaixo
console.log(evenArray(10))
console.log(evenArray(5))
console.log(evenArray(1))
console.log(evenArray(-1))