// const list = [1, 2,3]
// actually it works internally that way

const list = new Array(1,2,3)

//array is a constructor function 
//array.prototype also have many methods that are setted to list.__proto__

// Array constructor set Object.create(Array.prototype) to list.__proto__
console.log(list.__proto__)

console.log(Array.prototype)

//Array.prototype is an array  