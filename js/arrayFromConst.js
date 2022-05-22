//we all know const made variable cant changed

//exmaple

const value1 = 123
value1 = 124
console.log(value1) //this will give us an error 

//but in the case of an array

const fruits = ["mango", "apple", "grapes", "bananan"]

fruits.push("strawberry")

console.log(fruits) //but this will change fruits array because push doesnt change
//address of fruits in head memory


//as reference object data types that object have a heap memory as refrence 
//so we can push pop shift unshift to const made variable
//in the case of lety keyword made array can be reassigned so always use const keyword for refernce type array

