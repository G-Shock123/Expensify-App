const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('This is my resolve data')

    },2000)
   console.log('beofre');
   
})

promise.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})

console.log('after')