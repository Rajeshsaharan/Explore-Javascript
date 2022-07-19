// promise Chain

const mypromise = Promise.resolve(5) // 5 is resolvedData

//.resolve return a value that can be accessed by .then methdo

mypromise.then((resolveData)=>{
    console.log(resolveData)// output is 5
    return resolveData; // resolvedData is now a promise
})

//but actually it than return an value(resolvedData) its actually retrun a Promise object


//.then() always return an promise by default return undefined

mypromise.then((resolveData)=>{
    resolveData++
    return resolveData
})
    .then((resolveData)=>{
        resolveData++
        return resolveData
    })
    .then((resolveData)=>{
        console.log(resolveData)
    })
