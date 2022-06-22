//methods ---- function inside object
const user = {
  firstName: "rajesh",
  age: 23,
  about: function () {
    console.log("hello world");
  },
};

//alternative can be written as arrow function or dierct

const testObj = {
  myfunc() {
    console.log(this); /// testObj
  },
};

user.about(); // "hello world"

const user1 = {
  firstName: "rajesh",
  age: 25,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

user1.about(); // rajesh , 23

//this refers to same object

console.log(this); //window object

function myfunc() {
  console.log(this);
}

myfunc(); //also refers to window object

//myfunc() added to window object as method

window.myfunc(); // window object
