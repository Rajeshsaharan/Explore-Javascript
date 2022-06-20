//'this' keyword expressed  whanever function/method is called
// read first Method/callApplyBind.js first

const user1 = {
    firstName : "rajesh",
    age : 9,
    about : function(){
        console.log(this.firstName, this.age)
    }
}



////mistake & warning
const myfunc0 = user1.about() //this value will be same as object because we called it 
console.log(myfunc) // undefined beacuse we retuned nothing if we return something myfunc0 will store it




const myfunc = user1.about  // 
myfunc() //expected output ----> rajesh, 9

// but this will never happen beacuse we are refrencing method to outside the object

//this will be "window" object here

//but bind method can bind outside function to bind to object ---return a function

const myfunc2 = user1.about.bind(user1)

myfunc2() // output ----> rajesh, 9



