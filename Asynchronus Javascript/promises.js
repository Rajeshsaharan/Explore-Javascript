// to manage ordered process we can use promises

/// very Important file ///

//problem
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");

//we want to change color of every element after 3 second continously

function changeColor(element, color, onSuccess, onReject) {
    setTimeout(() => {
        if (element) {
            element.style.color = color;
            if (onSuccess) {
                onSuccess();
            }
        } else {
            onReject();
        }
    }, 3000);
}

// dom hell

// changeColor(heading1, "blue", onSuccessFun, onRejectFun) -- doing using arrow function

changeColor(heading1,"blue",() => {
        // we pass the same function for next element if onSuccess callback called
        changeColor(heading2, "green",() => {
                changeColor(heading3, "yellow", () => {
                    changeColor(heading4, "black", () => {
                        changeColor(heading5, "red", () => {

                        }, () => {
                            console.log("heading5 doest exist")})}, () => {
                        console.log("heading4 doest exist")})}, () => {
                    console.log("heading3 doest exist")})},() => {
                console.log("heading2 doest exist");});},() => {
        console, log("heading1 doest exist");
    }
);


// dom please do it one time to understand concept of promises

//promises ----> future Value

const bukcket = ["pasta", "masala", "namak"]


// produce a promises
// new Promise constructor fucntion ---> create Promise object
const myPromises = new Promise((resolve, reject)=>{
    if(bukcket.includes("pasta") & bukcket.includes("namak") && bukcket.includes("masala")){
        resolve("fried pasta")// any data , object , array can passed
    }else{
        reject("couldnt find some things") //any data ,object, array can passed
    }
    
})

console.log(myPromises) // prototype ---> Promise

// consume  a Promise
//.then (resolve data, reject data )
myPromises.then((resolveData)=>{ //then accept args as resolved data "fried pasta"
    console.log(resolveData) //resolved data , object, array
}, (rejectedData)=>{console.log(rejectedData)}) // rejected data, object, array


//another way using channing

// myPromises.then().catch() //then for resolve & catch for error

myPromises.then((resolveData)=>{
    console.log(resolveData)
}).catch((rejectedData)=>{
    console.log(rejectedData)
})

/////////////////////////////////////////////

//microtask queue( Promise object) >>>>>>>> (callback queue)(setInterval/setTimeout) 


//function return Promise object

function myPromise2(){
    const value = true;
    return new Promise((resolve, reject)=>{
        if(value){
            resolve("resolved data")
        }else{
            reject("rejected data")
        }
    })
}

myPromise2() //return Promise object

// myPromise2().then().catch()

myPromise2()
        .then((resolveData)=>{
            console.log(resolveData)
        }
        )
        .catch((rejectedData)=>{
            console.log(rejectedData)
        })

//setTimeout function with Promise object after 3 sec

function myPromise3(){
    const value = true;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(value){
                resolve("resolved Data")
            }else{
                reject(" rejected data")
            }
        }, 3000) // 3second after setTime oute resolve or reject
    })
}


myPromise3()
            .then((resolveData)=>{
                console.log(resolveData)
            })
            .catch((rejectedData)=>{
                console.log(rejectedData)
            })


///