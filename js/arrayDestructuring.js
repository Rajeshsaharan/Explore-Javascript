//array destructuring

const array1 = ["apple", "mango"]

//conventional method
var fruit1 =array1[0]
var fruit2 = array1[1]

//destructuring method
//can make normal or const variable using let or const varible

var [fruit1, fruit2] = array1

var [fruit1, fruit2, fruit3] =array1

// fruit3 will be undefined


const fruits = ["apple", "mango", "banana"]

const [fr1, , fr2]= fruits
//skip can be used comma
//now fr1 ---> apple
// fr2 -----> banana

///new array formation in destructuring

const array2 = ["item1", "item2", "itme3", "itme4"]

const [var1, var2, ...mynewArray] = array2

//var1 -----> item1
//var2 ------> item2
//...mynewArray will return an new array with rest of element

//output will be mynewArray = ["item3", "item4"]
