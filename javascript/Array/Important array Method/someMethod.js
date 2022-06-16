//some method will return true or false if one of any element follow callback function

const numbers = [1,2,3,5,7,9]


const ans =numbers.some((number)=> number%2 ==0)

//in the case of 2 callback function return true

console.log(ans) // output -----> true