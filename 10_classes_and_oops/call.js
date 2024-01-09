function setUserName(username){
    this.username = username
}

function createUser(username, email , isLoggedIn){

    setUserName.call(this , username)

    this.email = email,
    this.isLoggedIn = true
}

const userOne = new createUser("chai" , "fb@chai.com" , true)

console.log(userOne)
