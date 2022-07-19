// asunc or await is used for webApi

const url = "https://jsonplaceholder.typicode.com/posts"

async function getPosts(){
    const response = await fetch(url) // function till await untill fetch(url) gives data 
    const data = await response.json() //it also return a promise with some value
    return data;
}

getPosts() // also return  promise so we can use .then( after this)
    .then((data)=>{
        console.log(data)
    })