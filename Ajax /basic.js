const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest() // new xhr object
xhr.open('GET', URL) 
console.log(xhr)
const ul = document.querySelector("ul")

//xhr.onreadstatechange called every time readyState changed
xhr.onreadystatechange = ()=> {
    if(xhr.readyState === 4){
        // console.log(xhr.response) // json as string
        const responseData = JSON.parse(xhr.response) // chnage JSON to Javascript object
        // console.log(responseData)
        const posts = responseData
        console.log(typeof posts) // objects {1:{}, 2:{}, 3:{}, 4:{}}
        for(let key of Object.keys(posts)){
            // console.log(posts[key].title)
            const li = document.createElement("li")
            li.textContent = posts[key].title
            ul.append(li)
        }

    }
}


// whenever readyState is four .onload method can be run so we can use onload function
// on the place of onreadystatevchange
xhr.onload = () =>{
    console.log("data is fetched readyState is now 4")
}


xhr.send()


//promisify data fatching with chaining



function dataFetch(method, url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest() //new xhr object
        xhr.open(method, url)
        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status <= 300){
                resolve(xhr.response) //resolvedData
            }else{
                reject(new Error("data cant fetched"))
            }
        }

        xhr.onerror = ()=>{
            alert("network connection break")

        }

        xhr.send()

    })
}

//as we know dataFetch return a promises we can use .then or .catch

dataFetch("GET", URL) //return Promise
        .then((resolvedData)=>{
            console.log(resolvedData)
            const data = JSON.parse(resolvedData)
            return data // here 'data' with promises return 
        })

//IMPORTANT : - if we dont return anything with .then() it will return Promise with undefined value

        .then((data)=>{
            console.log(data) // data object
            const Postid = data[4].id
            console.log(Postid) //complete obejct with 4 key posId
            return Postid // now "Postid" with Pormises return
        })
        .then((Postid)=>{
            const url = `${URL}/${Postid}`
            console.log(url)
            return dataFetch("get", url) // retrun a promise using a function(by calling a function) that return a promise
        })
        .then((idResolvedData)=>{
            console.log(idResolvedData) // json for one Postid
            console.log(JSON.parse(idResolvedData))
        })


    ///very importnat file    /////////


    //how to use Fetch Api //

    fetch(URL) // return  a promise
            .then((resolvedData)=>{
                console.log(resolvedData) // gives us an object
                return resolvedData.json() // return a promise with resolvedData.json() so we can use .then() further
            })
            .then((resolvedDataByJson)=>{
                console.log(resolvedDataByJson) //now give us on object of javascript
                //if we didnt return something here this .then will return undefined with instant resolves
            })