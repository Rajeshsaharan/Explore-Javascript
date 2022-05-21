//array clone

let array1 = ['item1', 'item2']
let array2 = array1 // reference data type stored in heap memory

console.log(array1 === array2) //true same reference data types


// clone an array without same refrence object
//slice method

let array3 = ['item1', 'item2']
//let array4 = ['item1', 'item2'] ///write all items that doesnt possible
let array4 = array3.slice(0) //clone all data from zero index to last

console.log(array3 === array4) //false 
//now we can perform seprate function on every different array


//concat method

let array5 = ['item1','item2']
let array6 = [].concat(array5)

//also gives same solution

