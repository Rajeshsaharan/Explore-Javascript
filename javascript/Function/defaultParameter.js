//default parameter

function anyfunc(a, b= 2){
    return a+b
}

anyfunc(2) // b will be equal to 2
anyfunc(2, 3) //b will be equal to 3

//rest parameter

function myfunc2(a,b,c){
    console.log(a,b,c)
}

myfunc2(1,2,3) // output -----> 1, 2,3

function myfunc3(a,b,...c){
    console.log(a,b,c)
}

myfunc3(1,2,3,4,5,6)  //output ------> 1,2,[3,4,5,6]