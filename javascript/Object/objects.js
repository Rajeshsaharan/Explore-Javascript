//objects are use to solve real worlde example
//objects are reference data types
//objects store data key value type 
//objects dont have any index
//unordered stored data types

const person = {
    name: "rajesh",
    age: 23,
    lang: ["python", "javascript", "solidity"],
    "person website" : "wwww.example.com" //space key only accesss by bract notation

}

console.log(person) //

//how to access data from object

console.log(person.name) //output ----> rajesh 
console.log(person["name"]) //output same
//key are always have string value

console.log(person.age)// output ----->23
console.log(person["age"])// same output

console.log(person.lang)//output -----> [] will return an array
console.log(person["lang"]) //output same

//how to add key value pair to an object

person.gender = "male" //object are mutable we can add data directly
person["course"] = 'brt' //adding data using bract notation


////////// adding key from variable ////////////////////////////////
const key = "email"
person[key] = "example@gmail.com"
