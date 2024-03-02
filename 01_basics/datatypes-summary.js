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

console.log(typeof myFunction);