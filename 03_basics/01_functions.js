
function sayMyName(){
console.log("U");
console.log("M");
console.log("A");
console.log("K");
console.log("A");
console.log("N");
console.log("T");
console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // console.log("Umakanth");
    // return result
    return number1+number2
}

const result = addTwoNumbers(3,4)

// console.log("Result:", result);

function loginUserMessage(username = "uma"){
    if(!username){  // username === undefined
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Umakanth"))
// console.log(loginUserMessage("umakanth"))

function calculateCartPrice(val1, val2, ...num1) {   // it takes first two values and returns ...num1 as a string
    return num1
}

// console.log(calculateCartPrice(200,300,400,700));

const user = {
    username: "umakanth",
    price: 199 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "uma",
    price:399
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,5000]));
