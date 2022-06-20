//arrow function take "this" from their surrounding
//arrow function cant change by using any call , apply ,bind method

const user1 = {
    firstName : "rajesh",
    age : 8,
    about : () =>{
        console.log(this)
    }
}


user1.about() // output ----- window object 
//because arrow function "this" represent one step above object

// also cant change by any call ,apply , bind method

user1.about.call(user1) // this will be same as "window object"