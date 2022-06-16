//object store key as always string or symbol
//maps we can use any type data types
//order guranteed
const person = new Map()

person.set('firstName', 'rajesh') //key is firstName as string
person.set(3, 'three') //key is 3 as number 


//how to access data from map

console.log(person.get("firstName")) //'rajesh'
console.log(person.get(3)) // 'three'

//for of loop on maps
 for (let key of person.keys()){
     console.log(key)
 }


 //direct for of loop

 for (let key of person){
     console.log(key)
 }


 