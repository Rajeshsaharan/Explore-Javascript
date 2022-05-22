//switch statement

let day = 0
if (day === 0){
    console.log("sunday")
}else if (day === 1){
    console.log("monday")
}else if (day === 2){
    console.log("tuesday")
} 
else{
    console.log('invalid day')
}

//switch statement
//switch(variable we want to track){
//     case variable value :
//         code excuated
//         break
// }


switch(day){
    case 0:
        console.log('sunday')
        break //to break out loop
    case 1:
        console.log('monday')
        break
    case 2 :
        console.log("tuesday")
        break
}