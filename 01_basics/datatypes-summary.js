// Primitive

// 7types:String, Number,Boolean, Null, undefined, Symbol, BigInt

const number = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')
    //console.log(Id == anotherId);

//console.log(id == anotherId);

const bigNumber = 1234543234433223455n

// Reference(Non - Primitive)

// Array, Objects, Functions

const heros = ["krish", "shaktiman"];

let myObj = {
    name: "Ansh",
    age: 21
}

const
    myFunction = function() {
        console.log("Hello world")
    }

//console.log(typeof myFunction);


//***********************************//

// stack(Primitive), Heap(Non-primitive)
//when stack memory is used we get a copy of the variable used called
//we get the reference of the original value(change in reference = change in org value)

let myAccount = "Anshsingh7755"

let myIgAccount = myAccount

myIgAccount = "Ansh7755"

console.log(myAccount);
console.log(myIgAccount);

let userOne = {
    email:"user@gmail.com",
    upi :"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

/*notes
all primitive values go in stack and when we 
take anyhig from stack we get a copy of that \
particular object rather getting original when 
we keep anything in heap we take reference
(if we change anything it actuallly applies on 
original value)*/