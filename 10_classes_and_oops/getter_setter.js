class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return `${this.email2}bhavya`
    }

    set email(someValue){
        this.email2 = someValue
    }

    get password(){
        return `${this._password}1234`
    }
    
    set password(value){
        this._password = value
    }
}

const chai = new User('brjjoshicom' , "abcdefg")

console.log(chai.password)