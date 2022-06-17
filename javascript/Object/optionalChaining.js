const person = {
    firstName : "rajesh",
    details : {
        course: "brt",
        age: 23
    }
}

person.firstName // 'rajesh'

person.details.course // brt

// using ?.

person?.details?.age // if "person" exist than give "details" if "details" exist than give further

//if any property doesn't exist undefined will return
