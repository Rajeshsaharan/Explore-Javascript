// javacript works
// global ,local , closure

// complie ----> code excute 

console.log(this)
console.log(window)
console.log(firstName)
var firstName = 'rajesh'

// 
console.log(this)
console.log(window)
console.log(myfunction)
console.log(fullName)

function myfunction(){
    console.log("this is test")
}

var firstName= "rajesh"
var lastName = 'saharna'
var fullName = firstName + " " + lastName
console.log(fullName)


