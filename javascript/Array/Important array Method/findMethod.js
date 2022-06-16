//find method
//pass elements through callback function & return first element that fulfill 
//requirment of element
const anyArray = ["amit", 'ankit', 'ram']

const ans = anyArray.find((string)=> string.length ===3 )

console.log(ans) //output ----> ram

//real world example


const persons = [
    {usrId : 1, firstName : 'rajesh'},
    {usrId :2, firstName : "amit"},
    {usrId :3, firstName: "ankit"}
]


const my3User = persons.find((user)=>user.usrId=== 3)

console.log(my3User) // output -----> {userId: 3, firstName : "ankit"}