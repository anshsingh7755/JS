//** functions - we collect some piece of code and put it in a package and access whenever it is reqired *//



// function sayMyName(){
// console.log("H");
// console.log("I");
// console.log("M");
// console.log("A");
// console.log("N");
// console.log("S");
// console.log("H");
// console.log("U");
// }
//  sayMyName()

function addTwoNumbers(num1, num2){  //here num1,num2 are parameters(when we create definition of function and the input entered are parameters) and 3 and a are arguments when fnx are called
//    let result = num1 + num2
//    return result
        return num1 + num2

}
const result  = addTwoNumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username == undefined){
        // console.log("Please enter a username");
        return
    }
    return `${username} just loggeed in`
}

//  console.log(loginUserMessage())

 // we somwtimes also use !-(!username) sign to change the value in the place of username == undefined 


// we can also define during creation of function to default assign the value
// when any value is not given it assings default value and when  value is given it overwrites

function calculateCartPrice (val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username:"Ansh",
    prices: 100
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:494
})

const myNewArray = [2200,400,400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,4000]));






