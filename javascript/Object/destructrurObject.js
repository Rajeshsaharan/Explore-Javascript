const profile = {
    'name1' : "rajeshsaharan123",
    'bio': "hey way to god",
    'id': 1
}

//old ways to declare variable from object
let username = profile.name1 // create a username variable from profile object
let user_bio = profile.bio //or profile["bio"]

//new ways to declare variable from object ---> known as object destructruing

let {name1 , bio } = profile //create variable with same key name 

console.log(name1) // rajeshsahran123
console.log(bio) // hey way to god


//create variable apart from key name form destructring

let {name1:username1, bio:user_bio1} = profile


console.log(username1) // rajeshsaharan123
console.log(user_bio1) // hey way to handle

