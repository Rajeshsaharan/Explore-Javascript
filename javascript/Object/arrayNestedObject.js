//object inside array
//very useful in real application

//object doesnt have skip option to skip an key but we can access any key by name
//example

const obj1 = {}

const users = [
    {
        id : 1,
        username : "xbyo",
        age: 23
    },
    {
        id : 2,
        username : "bubu",
        age: 21
    }
]

//for loop

for (let user of users){
    console.log(user) // iterate through array
}

//nested destructuring

const [user1, user2] = users
console.log(user1) // return first object from array
console.log(user2) //retrun second object from array


const [{id}, {username}] = users // object & array both destrcuture with same key name variable

console.log(id) // first object id
console.log(username) // second object username

//custom name variable
const [{id:userId}, {username:UserName_of_user}] = users

console.log(userId) //fetch id from first object (custom variables)
console.log(UserName_of_user) //fetch username from second object (custom Variables)

