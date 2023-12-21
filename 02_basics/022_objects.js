const tinderUser = {}

tinderUser.id = "123abc"

tinderUser.name = "sammy"

//console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "bhavya",
            lastname : "joshi"
        }
    }
}

//console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a" , 2 : "b"}
const obj2 = {3:"b", 4: "c"}

//const obj3 = {...obj1,...obj2}
const obj3 = Object.assign({},obj1,obj2)

console.log(obj3)

const users = [
    {
        email : "a",
        2 : "b"
    },
    {
        1 : "a",
        2 : "b"
    },
    {
        1 : "a",
        2 : "b"
    }
]

console.log(users[0].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))