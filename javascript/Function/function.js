//function declartaion

function myfunc(){
    //function work
}

//calling the function


myfunc() //

function myfunc2(){
    return "hi  there"
}

let returned_value = myfunc2() //returned value gives string value


///function parameter


function myfunc3(parameter1, parameter2){
    return parameter1 + parameter2
}

let returned_value2= myfunc3(2, 3) //myfunc3(argument1, argument2)

//odd or even function

function iseven(number){
    if (number%2 == 0){
        return true
    }else{
        return false
    }
}

//whenever function return something function stopped excuating further

//a BASIC function

function check_array(arr, tar){
    for (let i = 0; i<arr.length;i++){
        if (arr[i]===tar){
            return i
        }
    }
    return -1
}

check_array([1,2,3.4], 4) //gives index no of tar argu
check_array([1,2,3,4], 5) //gives -1 