//spread operator for object

const obj1 = {
    'name':"rajesh",
    'age': 23
}
const obj2 = {
    'course' : "brt",
    "lang": ["python", 'javascript', 'solidity']
}

//clone to any obj

const newObj = {...obj1}
const newObj2 = {...obj1, ...obj2} //add all keys to A single object
const newObj3 = {...obj, ...obj2, "future":"hacker"} //ALso can add key extra