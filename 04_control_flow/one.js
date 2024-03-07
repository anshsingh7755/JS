//if

// if (condition){       //if the condition is true we move inside the
//                     //and execute it else we dont go inside the if statement

// }


// if (true){
//     //execute
// }
// if (false){
//     //not execute
// }

// const isUserloggedIn = true
// const temperature = 41

// if(temperature > 41){
//     console.log("less than 50");
// }else{

//     console.log("temp is greater than 50");
// }


// 2<=2
// <,>,<=,>=,==,!=,===(checks type also)


// const score = 200

// if (score >100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


// short hand notation

// const balance = 1000

// // if(balance > 500) console.log("test"); // this is implicit scope in which we just assume the braces and also written in single line
// // if(balance > 500) console.log("test"),console.log("test2");                                       // we can use commaa for two consoles but itbad

// if (balance < 500 ){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance <900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 2==3){
    console.log("Allow shopping");
}

// && means all the  statements true
 
if (loggedInFromEmail || loggedInFromGoogle ){
    console.log("user logged in ");
}

// if any statement is true then the condition will perform
