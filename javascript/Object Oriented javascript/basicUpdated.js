// new ways to create object

//as we know function.prototype gives an empty space object we can use them to define methods


function createObject(firstName, age , course){
    const obj = Object.create(createObject.prototype)
    obj.firstName = firstName
    obj.age = age
    obj.course = course
    return obj
}

//now add methods to createObject.prtotype ({}) methods

createObject.prototype.about = function(){
    console.log(this.firstName, this.age)
}

createObject.prototype.bio = function(){
    console.log(this.firstName, this.course)
}

//lets try to create a object using function

const obj1 = createObject("rajesh", 29, "brt")
obj1.about()
console.log(obj1.__proto__) //output should be createObject.protoype object