let userOne = {
    email : "userone@google.com",
    phone : 789,
    upi : "userone@ybl"
}

let userTwo = userOne

console.log(userTwo);

userTwo.email = "userTwo@google.com"

console.log(userOne)
console.log(userTwo)