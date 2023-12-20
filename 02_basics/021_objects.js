//singleton objects

//type 2 objects

const mySym = Symbol("key1")

const JS_user = {
    name : "bhavya",
    [mySym] : "myKey1",
    age : 20,
    location : "haldwani",
    email : "bhavya@andromedaai.com",
    isLoggedIn : false,
    lastLoginDays : ["mondays","tuesday"]
}

console.log(JS_user["email"])
console.log(JS_user[mySym])

//Object.freeze(JS_user)

JS_user.greetings = function(){
    console.log(`hello js user ${JS_user.name}`)
}

console.log(JS_user.greetings())