//how to iterate in object


const person = {
    name:"rajesh",
    age: 23,
    lang: [ 'python', 'javascript', 'solidity'] 
}

//for in loop---> provide key from an object
for (let key in person){
    console.log(`${key}:${person[key]}`)
}

//another method

Object.keys(person) // will gives array of all key

//for of loop
for (let key of Object.keys(person)){
    console.log(person[keys])
}


