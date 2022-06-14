//map method ---> create a array of callback function returning

//pass number & index to callback function
//create an array callback function returning


const numbers = [1,2,3,4]

function squarefunc(number, index){
    return number * number
}

const squareNumbers = numbers.map(squarefunc) // return a array of all elements

console.log(squareNumbers)