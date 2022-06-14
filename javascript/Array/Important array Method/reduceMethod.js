//reduce method 

const numbers = [1,2,3,4,5]

//to understand reduce ---> sum of all the numbers in array

const ans = numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue
})


//we can pass accumulator initial value

// const ans = numers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue
// }, 100) 
// accumulator initial value is set to 100




console.log(ans) //15

//accumulator           //currentValue        //return
//1                      2                     3
//3                      3                     6
//6                       4                  10
//10                      5                  15


const userCart = [
    {productId : 1, price : 230000},
    {productId:2, price : 240000},
    {productId: 3, price : 1200}
]

const totaAmount = userCart.reduce((totalPrice , currentProduct)=>{
    return currentProduct.price + totalPrice
},0) //inital value of accumulator set to zero

console.log(totaAmount)  // 

