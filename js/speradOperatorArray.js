let array1 = ["item1", "item2"]
let array2 = [...array1] //spread operator 
// spread operator unpack all items of an array 
//like array1 unpack all elements of on it

let array3 = [...array1, 'item3', 'item4'] //can also add new item

let array4 = ["item5", "item6"]

let newArray = [...array3, ...array4] //also can use like that