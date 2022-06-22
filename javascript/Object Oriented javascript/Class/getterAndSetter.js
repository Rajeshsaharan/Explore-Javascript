//getter are used to use method as props


class User{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    get details(){
        return `${this.name} is ${this.age} old`
    }

    //setter

    set fullName(fullname){
        const [firstName, lastName] = fullname.split(" ")
        this.firstName = firstName;
        this.lastName = lastName
    }

    //class related methods

    static classDetails(){
        console.log('only called from class')
    }

    //class related props

    static props = 'class props'
}

const user1 = new User("rajesh", 23)

console.log(user1.details) // to use method as props we can use "get" keyword

user1.fullName = "amit kumar" // changed to props using function called setter

User.classDetails() // output --- > only called from class

// user1.classDetails() // not possible

User.props // only class related props
