// geting data

// by ajax xhr method

const url = "https://dummyapi.io/data/v1/user"

const xhr = new XMLHttpRequest()
xhr.open("GET", url) // method 7& pass the url

xhr.onload = () => { // onload exexute when readyState === 4 
    const data = JSON.parse(xhr.response) // to change resonse json to javascript object
    console.log(data)
}
xhr.setRequestHeader("app-id", "62d76eafd9286e375e2b5128"); // api key or app id related data can be send by setRequestHeader
xhr.send()

// 

//doing by Promises

let myData = []
const getPost = async (page, limit) => {
    const response = await fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: { "app-id": "62d76eafd9286e375e2b5128" }
    })
    return response.json();
}



let counter = 0; //counter can be use execute function one time

const btn = document.querySelector(".btn")
const ul = document.querySelector("ul")
btn.addEventListener("click", async()=>{
    const {data , page, limit, total } = await getPost(counter, 10)
    counter++
    // console.log(typeof data)
    // console.log(...data)
    console.log(Array.isArray(data))
    myData.push(...data) // data is array (spread operator for unpacking)
    console.log(myData)
    if(counter === total/10){
        console.log("no more content")
    }else{
        for (let postId in myData){
            const li = document.createElement("li")
            li.textContent = `${myData[postId].title} + ${myData[postId].firstName}`
            ul.append(li)
        }
    }
   

})