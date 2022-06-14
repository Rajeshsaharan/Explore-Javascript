//important array methods

const numbers = [1,2,3,4]

function multiplyby2(number, index){
    console.log(number, index)
}

multiplyby2(numbers[0], 0) 

//using for loop for all elements in array

for (let i in numbers){
    multiplyby2(numbers[i], i)
}

//forEach method take callback function as parameter & pass number & index value to 
//call back function as parameter

numbers.forEach(multiplyby2) 

//forEach works like an loop

// another forEach method


numbers.forEach(function (number, index){
    console.log(number, index)
})

//using arrow function

const users = [
    {firstname: "rajesh", age: 23},
    {firstname:'amit',age : 25}
]

users.forEach((user,index)=>{
    console.log(user.firstname)
})


//for single argument for callback function

users.forEach(user =>{
    console.log(user.firstname)
})