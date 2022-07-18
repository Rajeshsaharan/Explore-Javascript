
const form = document.querySelector("form")
console.log(form)
const mainHead = document.querySelector(".main-heading")
const inputValue = document.querySelector(".center input[type='text']")
const searchInput = document.querySelector(".search")
console.log(searchInput)
const ul = document.querySelector("ul")
const searchButton = document.querySelector(".search-btn")

searchButton.addEventListener("mouseover", (e)=>{
    searchInput.classList.add("search")
    console.log("event happend")
    
})



form.addEventListener("submit", (e)=>{
    inputValue.classList.toggle("vis")
    console.log("event happend")
    mainHead.remove()
    e.preventDefault()
    const li = document.createElement("li")
    li.textContent = inputValue.value
    ul.append(li)
    inputValue.value = ""

})