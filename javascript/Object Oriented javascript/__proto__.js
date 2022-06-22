
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key3 : "value3"
}

console.log(obj2.key2) // undefined

// we want to check key2 from obj1 object

const obj3 = Object.create(obj1)
obj3.key4 = "vlaue4"


// there is a connection between obj1 & now we can access key from obj1 object.

console.log(obj3.key2) // "value2"


//proto is refrence type check

//__proto__ == [[prototype]] is equal

console.log(obj3.__proto__) // output is -----> obj2
