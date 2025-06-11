// let myName = "Umakanth     "
// let mychannel = "java     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.Umakanth = function(){
    console.log(`Umakanth is present in all objects`);
}

Array.prototype.heyUmakanth = function(){
    console.log(`Umakanth says hello`);
}

// heroPower.Umakanth()
// myHeros.Umakanth()
// myHeros.heyUmakanth()
// heroPower.heyUmakanth()

// inheritance

const User = {
    name: "java",
    email: "java@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Javascript     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Umakanth".trueLength()
"iceTea".trueLength()