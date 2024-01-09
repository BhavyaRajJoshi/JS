class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(email, password){
        super()
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`${this.username} added a new course`)
    }
}

const chai = new Teacher("chai@code.com" , "123")

console.log(chai)

chai.logMe()

const masalaChai = new User("masalachai")

masalaChai.logMe()