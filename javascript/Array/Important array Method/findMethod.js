//find method
//pass elements through callback function & return first element that fulfill 
//requirment of element
const anyArray = ["amit", 'ankit', 'ram']

const ans = anyArray.find((string)=> string.length ===3 )

console.log(ans) //output ----> ram

