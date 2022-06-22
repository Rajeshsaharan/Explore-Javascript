//new keyword

function createUser(firstName, age, course){
    this.firstName = firstName;
    this.age = age
    this.course = course
}

//to add method to createUser.prototype
createUser.prototype.about = function(){
    console.log(this.firstName, this.age)
}

// new keyword create an empty object known as this

// this ----> {}
// return this object
// create a link between "this" object and createUser.prototype object
// example we do it manually ---> Object.create(createUser.prototype) 

const user1 = new createUser("rajesh", 25, "brt")
console.log(user1.__Proto__) //output -----> createUser.prototype


