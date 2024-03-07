const userMail = []

if(userMail){
    console.log("GOt user email");
}else{
    console.log("dont have user email");
}

//falsy values

// false,0,-0,BigInt 0n,"", null , undefined , NaN

//truthy values

//"0" , 'false', " "(space), [], {}, function(){}


// if (userMail.length === 0){
//     console.log("array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0 ){
    console.log("Objeect is empty");
}

// Nullish Coalescing Operatr (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15
// console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less thana 80") : console.log("morethan 80");






