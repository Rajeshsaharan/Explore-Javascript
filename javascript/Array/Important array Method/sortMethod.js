//sort method---change original array

const numbers = [5,9,1200,400,3000]


numbers.sort() //sort method all elments according strings
// ["5",'9',"1200","400", "3000"] sort according to ascii code


// so we cant sort numbers using sort method

//but we can sort albhabate using sort method

const userNames = ["rajesh", "amit", "vishal"]

userNames.sort() //change original array 

console.log(userNames) //sort userNames accordingly ascii table

// numbers sort using callback function

const numbers2 = [1,2,16,5,20]

//ascending order to numbers

numbers2.sort((a,b)=>{
    return a-b
})

//1(a), 2(b)
// 1-2 ----> -1
//if a -b -----> negative (less than zero )---> arranged to a,b

//a-b -----> postive (grater than zero) ----> arranged to b ,a


//descending order to numbers

numbers2.sort((a,b)=>{
    return b-a
})

//real world example

const products = [
    {productId: 1, price:2000},
    {productId: 2, price:6000},
    {productId: 3, price:9000}


]

// //change original array 

// products.sort((a,b)=> a.price-b.price) //change original array of products
// //  not recommnded


//create new array to low to high
const ascendingSortNewProduct = [...products].sort((a,b)=>a.price-b.price) 

//create new array to high to low

const descendingSortNewProduct = [...products].sort((a,b)=> b.price-a.price)