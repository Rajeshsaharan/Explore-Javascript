const user1 = {
    firstName : "rajesh",
    age : 23,
    about (){
        console.log(this.firstName, this.age)
    },
    course: "Brt",
    bio(){
        console.log(this.firstName, this.course)
    }
}


user1.about()

console.log(user1)


//creating a function to create an object

function create_object(firstName, age, course){
    user_obj = {};
    user_obj.firstName = "rajesh";
    user_obj.age = 23;
    user_obj.course = 'bpt'
    user_obj.about = function(){
        console.log(this.firstName, this.age)
    };
    user_obj.bio = function(){
        console.log(this.firstName, this.course)
    };

    return user_obj;
}


const user2 = create_object('rajesh', 24, 'bpt')
console.log(user2)
user2.bio()
user2.about()


// new way to save memory & improve pro.

const userMethods = {
    about : function(){
        console.log(this.firstName, this.age)
    },
    bio : function(){
        console.log(this.firstName, this.course)
    }
}

function createObject(firstName, age, course){
    userObj = {}
    userObj.firstName = firstName
    userObj.age = age
    userObj.course = course
    userObj.about = userMethods.about
    userObj.bio = userMethods.bio
    return userObj
    
}

const User3 = createObject("amit", 19, "bmlt")

console.log(User3)

User3.bio()

