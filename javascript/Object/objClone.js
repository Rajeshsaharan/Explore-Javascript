//clone using Object.assign

//memory

const obj = {
    key1 : 'value1',
    key2 : 'value2'
}

const  obj2 = obj //same object same refrence object

const obj3 = {...obj} //diffrent object //object cloning


const obj4 = Object.assign({}, obj) //another method to clone object

