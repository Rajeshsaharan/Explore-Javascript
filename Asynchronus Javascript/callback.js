//function passing as arg in function called callback 

//simple callback

function myfun(callback){
    console.log("hello world")
    callback()
}

function callbackFun(){
    console.log("hello world from callback")
}

myfun(callbackFun)

//simple callback as arrow function

function myfun2(callback){
    console.log()
    callback()
}

myfun2(()=>{
    console.log("hello world from callback")
}) // callback function passed as arrow function


//doule on onSucces or onReject callback


function showAndAdd(num1, num2, onSuccess, onReject){
    if(typeof num1 === "number" && typeof num2 === "number"){
        onSuccess(num1, num2)
    }else{
        onReject(num1, num2)
    }
}

function onSuccessFun(num1, num2){
    console.log(num1 + num2)
}

function onRejectFun(num1, num2){
    console.log(`${num1} & ${num2} is wrong data type`)

}

showAndAdd(2, 4, onSuccessFun, onRejectFun)  //output --- 6

showAndAdd("2", 5, onSuccessFun, onRejectFun) // 2 & 5 is wrong data type


