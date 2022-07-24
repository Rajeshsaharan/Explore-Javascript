import { getPost } from "./Js/getPost.js";
import {ul} from "./Js/elements.js"
import {userId, id,title, body, submit, form} from "./Js/elements.js"
const url = "https://jsonplaceholder.typicode.com/posts"

getPost()
    .then((data)=>{
        const sortedKey = []
        for(let key in Object.keys(data)){
            sortedKey.push(key)
        }
        sortedKey.sort((a,b)=>{
            return b-a //sortedKey original array is changed
        })
        // console.log(sortedKey) // sorted

        for (let key of sortedKey){
            const li = document.createElement("li")
            li.textContent = `${data[key].id}  -  ${data[key].title}`
            ul.append(li)
        }
           
    })


// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     const object = {}
//     object.title =title.value,
//     object.body = body.value,
//     object.userId = userId.value
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(object),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
    
    
// }
// )


//doing by xhr 


// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const object = {}
//     object.title =title.value,
//     object.body = body.value,
//     object.userId = userId.value
//     const xhr = new XMLHttpRequest()
//     xhr.open("POST", url)
//     const data = JSON.stringify(object) // change to json
//     console.log(data)
//     xhr.setRequestHeader("content-type", "application/json") //to use data as json always decide content-type
//     xhr.send(data)


//     })

//doing by async & await
//addEventListner take a callback function

const addPost = async(object)=>{
    const response = await fetch(url, {
        method : "POST",
        body : JSON.stringify(object),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    })
    const data = response.json()
    return data
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const object = {}
    object.title =title.value,
    object.body = body.value,
    object.userId = userId.value
    addPost(object).then((data)=>
        console.log(data))
})


//////