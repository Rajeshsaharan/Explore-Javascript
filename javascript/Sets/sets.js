//sets ---> iterable
//store data
//no index_based access
//order is not guranted
//unique items are allowed



//const numbers = new Set(any iterbale data type)

const numbers = new Set([1,2,3])
//no order maintained
console.log(numbers) //output -----> {1,2,3} //no index based & no duplicate allowd

//example

const userNames = new Set();
const numbers1 = [1,2,3,4,5]

userNames.add("amit") //added
userNames.add("rajesh") //added
userNames.add("ankit") //added
userNames.add("amit") //not added
userNames.add(["item1", "item2"]) //added
userNames.add(["item1", "item2"]) // added because both array have diffrent memory in js engine
userNames.add(numbers1) //added
userNames.add(numbers1) //not added
