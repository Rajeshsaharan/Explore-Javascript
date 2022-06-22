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


//CONVENTION 

//IF A FUNCTION IS CALLED WHENEVER WE USE NEW KEYWORD WE SHOULD USE FIRST LETTER CAPITAL


// gives all keys of object + __proto__ object both keys

for (let keys in user1){
    console.log(keys)
}

//to Avoid __proto__ object keys we can use hasOwnProperty method

for (let key in user1){
    if (user1.hasOwnProperty(key)){
        console.log(key)
    }else{
        console.log("this key os not from main object")
    }
}


