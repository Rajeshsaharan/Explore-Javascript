//function returning function

function myfunc(){
     const myfunc2 = () =>{
         console.log("hello  world")
     }
    return myfunc2;
}

const ans = myfunc() // myfunc function return a function will be store in ans variable

// ans variable will be a function we can call that

ans() //output -----> "hello world"


