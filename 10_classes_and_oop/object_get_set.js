const User = {
    _email: 'u@uk.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const js = Object.create(User)
console.log(js.email);