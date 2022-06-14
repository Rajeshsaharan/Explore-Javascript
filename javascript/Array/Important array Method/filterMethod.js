//filter method ---> callback function should be return boolean value

function callbackfunc(number,index){
    return number%2 ===0
}

const numbers = [1,2,3,4,5,6,7,8,9,0]

const new_numbers = numbers.filter(callbackfunc) //add all elements to array return true value

console.log(new_numbers) //output ----> [2,4,6,8,0]