//callback function --> taking a function as para 

function func1(){
    console.log("hello world")
}

function myfunc(callbackFunc){
    console.log("hey there")
    callbackFunc();
}

myfunc(func1) ;// output --------> "hey there"
                                    //"hello world"