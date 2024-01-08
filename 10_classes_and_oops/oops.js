const user = {
    username: "Bhavya",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        console.log(this);
    }
}

function User(username , loginCount, isSignedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isSignedIn = isSignedIn

    this.greetings = function(){
        console.log(`welcome ${username}`)
    }

    return this 
}

const UserOne = new User("bhavya" , 34 , true)

console.log(UserOne)

