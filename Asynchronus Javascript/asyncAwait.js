

// get data return a Promise 
// we can consume that Promise using then catch block or can use async await

 function getdata(value){
    return new Promise((resolve, reject)=>{
        if(value){
            
        resolve("resolved")
        }else{
            reject("rejected")
        }
    })
}



//replacing then block with await

const data = async()=>{
    const data = await getdata(true)
    console.log(data) //---> gives resolved data
    // if we retun it from async function if will become another Promise
    return data; // now data function retunr an Promise
    // to handle this promise we can use any then catch block or we can use async await function


}


data()

// we can use try or block with async await to hanlde error


const data2 = async()=>{

    try{
            const data2 = await getdata(false)
            console.log(data2) // now resolve will not work
            
    }catch(e){
        console.log(e) // rejected is here
    }
}

data2()