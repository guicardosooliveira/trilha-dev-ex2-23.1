// Crie sua função aqui
function secondBiggestNumber(array) {
    const sortedArray = array.sort();
    return sortedArray.at(-2)
}

// Não altere as linhas abaixo
console.log(secondBiggestNumber([0, 1, 2, 3, 4, 5]))
console.log(secondBiggestNumber([-1, 10, 20, 30, -10]))
console.log(secondBiggestNumber([100]))