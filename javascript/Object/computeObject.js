const key1 = name
const key2 = age

const value1 = "rajesh"
const value2 = 23

const person = {
    key1 : value1,
    key2 : value2
}

console.log(person) // key  will be same bcz by default key are string

//real solution

const person2 = {
    [key1] : value1,
    [key2] : value2 ,

}

//this is called computed object
