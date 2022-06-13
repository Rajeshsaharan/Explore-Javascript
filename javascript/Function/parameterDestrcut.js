//parameter destrcut 
//used in react & Object


const person = {
    firstName : "rajesh",
    lastName: "saharan",

}

function personInfo(obj){
    console.log(obj.firstName, obj.lastName)
}

personInfo(person) // output ----> rajesh, saharan

//paramter destrcuturing


function anotherPersonInfo({firstName, lastName}){
    console.log(firstName, lastName)
}

anotherPersonInfo(person) //output -----> rajesh , saharan

