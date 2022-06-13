//first read file variables/variablesKeywords.js ----> IMPORTANT
//block scope or function scope

//let or const are block scope
//var is function scope

// { } ----> block
//& whole document or .js file is also a block

{
    let firstName = "rajesh"
    var lastName = "saharan"
    const age = 23
    console.log(firstName) //access from block & reassigned but redeclared in same 
    //block scope
    console.log(age) //access from block & cant reassigned & redeclared in same block scope
}


console.log(lastName) // var can be access fro outside block & reassigned & redeclared





