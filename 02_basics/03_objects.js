// singleton - when we make any object from any constructor
//object.create
// object-literal -  when we make from literals singles are not created

const mySym = Symbol("key1")

const JsUser = {
    name:"Ansh",
    "full name":"Ansh Singh",
    [mySym]: "mykey1",
    age: 21,
    location : "noida",
    email : "ansh@gmail.com",
    isLoggedIn : false,
    lastloginDays: ["Mon","Sat"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

//**imp - we use square brackets around symbols to refer it as symbols or else it works like a string */

JsUser.email = "ansh@yahoomail.com"
//Object.freeze(JsUser)  // to freeze the value further updates would not be applicable
JsUser.email = "ansh@googlemail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());