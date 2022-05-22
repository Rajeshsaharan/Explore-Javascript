//javascript strings are immuatble
//example

var firstName = "rajesh"
//var firstName[2] ="k" //wrong can't change because strings are immutable
//but we can reassign 
firstName = "rakesh" //we can reassign & redeclare in the case of var 
//& in the case of let we can only reassign in same block scope

////////string methods ////

let lastName = "    saharan    " //space will be counted as character

//trim method lastName.trim() -- return a new string without space doesnt change 
//lastName but we can store in again in lastName or other new variable

let newLastName = lastName.trim()

//alternative way --> lastName = lastName.trim() ///

console.log(newLastName) //output ---> saharan(without space)
console.log(lastName) //output --->   saharan    (with space) 
//strings are immuatable


/// toUpperCase() --->returns new string Upper case //
let newUpperCaseLastName = newLastName.toUpperCase()
console.log(newUpperCaseLastName) //output --> SAHARAN

// toLowerCase also work same


