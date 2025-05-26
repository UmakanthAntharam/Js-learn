const user = {
    username: "umakanth",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "uma"
// user.welcomeMessage()

// console.log(this);

// function chai(){                   // it does not work because this key does not work in functions.
//     let username = "umakanth"
//     console.log(this.username);
// }

// chai()

// const chai = function () {    // same goes in here. this does not work in functions.
//     let username = "umakanth"
//     console.log(this.username);
// }

const chai =  () => {         // it does not work in arraws too 
    let username = "umakanth"
    console.log(this);
}


// chai()                        //   () => {}     this is how array function is declared

// const addTwo = (num1, num2) => {
//     return num1 + num2                    // this is explicit return, we have to use return and curly braces
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )   // this is implicit return so we dont have to use return and we can use normal braces.

const addTwo = (num1, num2) => ({username: "umakanth"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()