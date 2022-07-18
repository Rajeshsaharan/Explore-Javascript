const myhead = document.getElementById('myhead') //myhead an object

// console.log(myhead.textContent)

//change textContent 

// myhead.innerText = "hey there"

const myhead2 = document.querySelector("#myhead") // to select by id

myhead2.style.color = "red" // myhead2.style is also an object

myhead2.style.border  = "2px solid green"

const var1 = document.querySelector(".abcd") 

console.log(var1)
console.log(var1.getAttribute("placeholder")) // get placeholder attribute

var1.setAttribute("placeholder", "new-attr-added-by-me")

// how to get multiple elements using querySelectorAll 

const TaskList = document.getElementsByClassName("task")

console.log(TaskList) //htmlcollection -- array like object (live list ---Important )

const TaskList2 = document.querySelectorAll(".task")

console.log(TaskList2)// nodelist --- array like obejct (static list----Important)

///htmlcollection can use only for-of or simple for loop can used
//htmlcollection cant use forEach method 

// nodelist can be loop through all ways
 

//innerhtml

const ul = document.querySelector("ul")

// ul.innerHTML = '<h1>innerhtml change</h1>'

// console.log(ul.innerHTML)

//childNodes & ParentNode
const rootNode = document.getRootNode()

const htmlElementNode = rootNode.childNodes[1]
console.log(htmlElementNode)

//nextSibling for sibling element
//parentNode for parent Node 
//nextElementNode for element sibling


//for selecting body we can select body using
const body = document.body

///
//ul is object to select element within ul we can use query methods direct on object

const li = ul.querySelectorAll(".task")

console.log(li) //nodelist  

//classList is used to check all class of an element

console.log(li)

console.log(ul.classList) //shows all class of an element ---> here is zero //donTokenList

const main = document.querySelector('main')

console.log(main.classList)

main.classList.add("bg-dark")

//also can be removed by

main.classList.remove("bg-dark")

//how to check class exist or not

main.classList.contains("bg-dark") //true or false

//toggle if class exist than remove | if doesnt exist than add

main.classList.toggle("bg-dark")

//add new html to document

ul.innerHTML = ul.innerHTML + "<li> task5 </li>"

// create element 

const newtask = document.createElement('li') //create element 
newtask.textContent = "task6" //to add text content 
ul.append(newtask) //append to parent element---add to last 
ul.prepend(newtask) // prepand to parent element ---- add to start

//before to insert(append) an element to just before an element
ul.before(newtask)
//after to insert(append) an element to just after an element

ul.after(newtask)


//remove an element
newtask.remove()

//how to get dimension of an element---> width height etc.
console.log(ul.getBoundingClientRect())