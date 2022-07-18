//events 
//click
// three ways to add event

const button = document.querySelector('.btn')
const body = document.body
console.log(button)

button.onclick = function(){
    console.log("button is clicked")
}

//another method

// const callbackfunction = (e)=>{console.log("heiie")}
// button.addEventListener("click", callbackfunction)

button.addEventListener("click", () =>{
    console.log("button is clicked")
})

//there is a an event
button.addEventListener("click", function(){
    console.log(this) //this refer same obj --->button
})

//in the case of arrow function this represent outer side object


button.addEventListener("click", ()=>{
    console.log(this) // this --- window
})

//event object---> browser webApi 

button.addEventListener("click", function(event){
    console.log(event.target) //gives same object -----> button object


})


