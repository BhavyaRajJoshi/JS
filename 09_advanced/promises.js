const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task complete")
        resolve();
    },200)
})

promiseOne.then(function(){
    console.log('promise consumed')
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async taks 2 is here")
    }, 1200)
})
.then(function(){
    console.log("async 2 resolved")
})

const PromiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "Bhavya" , email : "exmapleEmail"})
    })
})

PromiseThree.then(function(user){
    console.log(user)
})

