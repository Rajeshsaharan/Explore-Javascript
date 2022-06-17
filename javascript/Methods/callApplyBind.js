// call apply & bind methods

const user1 = {
    firstName : "rajesh",
    gender : "male",
    about : function(){
        console.log(this.firstName, this.gender)
    }
}

user1.about() //output ---> rajesh, male
user1.about.call(user1) // same output

const user2  = {
    firstName : "amit",
    gender : "male"
}





user1.about.call(user2) //this refer to user2 object


//we can define function outside & can be add to every object using call methof
function outsideFunc(course, id){
    console.log(this.firstName, this.gender, course, id)
}

outsideFunc.call(user1, "brt", 123) // this === user1 
outsideFunc.call (user2, "bpt", 125) //output "amit", "male", "bpt", 125 //this === user2


//apply methods

outsideFunc.apply(user1, ["brt", 123]) //call & apply both are same but apply pass the argu as array form


//bind method

//bind return a function

const newfunc = outsideFunc.bind(user1, 'brt', 123)

newfunc() //can be called further
