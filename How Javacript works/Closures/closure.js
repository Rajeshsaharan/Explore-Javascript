function outerFunc(){
    function innerFuc(){
        console.log("this is exact")

    }
    return innerFuc
}

const answer = outerFunc()

//now answer will work like as inner function 

//whenever a function return from function innerfuction will return with outerfunction
// local memory variables or arguments


//exercise 

function myfunc(){
    var counter = 0;
    return function(){
        if (counter > 1){
            counter ++;
            console.log("one time called")
        }else{
            console.log("no chance")
        }
    }
}

const myfunc2= myfunc()
myfunc2()
myfunc2()

