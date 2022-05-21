//nested if else game 

let winningNumber = 20
let userGuess = +prompt("guess a number") //take output from browser as string

console.log(typeof userGuess, userGuess) //output --> string , "12"

//to change number we can use number()
if (userGuess===winningNumber){
    console.log("your guess is right")
}else{
    if (userGuess > 20){
        console.log("too high")
    }else{
        console.log("too low")
    }
}


///if else if else code'


if (true){
    console.log('yes')
}else if (true){
    console.log("case 1")
}else {
    console.log("totaly false")
}