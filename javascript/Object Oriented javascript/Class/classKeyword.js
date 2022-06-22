//Class are fake in javascript
function createUser(firstName, age, course){
    this.firstName = firstName;
    this.age = age
    this.course = course
}

//to add method to createUser.prototype
createUser.prototype.about = function(){
    console.log(this.firstName, this.age)
}

const user1 = new createUser("rajesh", 25, "brt")


//using class ways

class CreateUser{
    constructor(firstName, age, course){
        // new keyword calls constructor function
        console.log("constructor called")
        this.firstName = firstName;
        this.age = age;
        this.course = course
    }

    // directly mention methods

    about(){
        console.log(this.firstName, this.age)
    }
}

const user2 = new CreateUser("rajesh", 23, "brt")
console.log(user2.__proto__) // constructor name is equal to class name
console.log(CreateUser.prototype)




class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    isHarmful(){
        return this.age >= 10
    }
}

const Animal1 = new Animal('babu', 23)

console.log(Animal1)

//class inherint

class Cat extends Animal{

}

// if Cat class doesnt have constructor than it will use parent class constructor



const cat1 = new Cat('mamu', 7)

console.log(cat1)

console.log(cat1.isHarmful())


//adding extra props to an sub class

class Dog extends Animal{
    constructor(name, age, species){ 
        super(name, age) //name , age can be handled by super class constructor
        this.species = species
    }

    knowSpecies(){
        console.log(this.species)
    }
}

const dog1 = new Dog('tommy', 2, 'rotwiller')

dog1.knowSpecies()