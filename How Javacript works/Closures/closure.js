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
