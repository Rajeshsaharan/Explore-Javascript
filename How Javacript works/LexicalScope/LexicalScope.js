//lexical scope

function myfunc(){
    const myvar1 = "value1"
    const myfunc2 = () =>{
        const myvar1 = "value59"
        console.log("inside" ,myvar1)
    }
    console.log(myvar1)
}

myfunc() //output 'value1'
        //        "inside","value59"


//javascript checks lexical scope to check variables valye
function myfunc3(){
    const myvar2 = "value1" //lexical scope of myfunc4 myvar2 variables
    const myfunc4 =()=>{
        console.log("inside",myvar2)
    }
    console.log()
    myfunc4()
}


myfunc3() // output  "value1"
                     //"inside", "value1"