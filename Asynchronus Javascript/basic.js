//synchronus programming --- single threaded

console.log("script start")
// setTimeout() take function as callback & time args to take time pass

setTimeout(()=>console.log("hello from setTimeoutfunction"), 1000)

console.log("script end")
const button = document.querySelector("button")

//setInterval execute after every second

const intervalId = setInterval(()=>{ // every setInterval methods return an Id
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const rgb = `rgb(${red}, ${green}, ${blue})`
    // console.log(rgb) //give new rgb value per second
    document.body.style.background = rgb
}, 1000) //after every second setInterval will execute call back function

button.addEventListener("click", (e)=>{
    clearInterval(intervalId)
    button.textContent= document.body.style.background
})

