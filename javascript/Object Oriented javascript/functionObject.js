// javascript function -----> function + object

function hello(){
    console.log("hey")
}

//getting function name

console.log(hello.name) // hello

// we can add property in function object

hello.myprops = "test"

console.log(hello.myprops) // "test"

//function provides us more usefull props
//function gives free space '{}' known as prototype

console.log(hello.prototype) // gives an empty array with constructor

//only function provide prototype props

//we can add some keys to prototype object of function

hello.prototype.name = "rajesh"

console.log(hello.prototype)

