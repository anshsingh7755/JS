const user = {
    username: "Ansh",
    price : 100,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Ansh"
//     console.log(this.username);
// }

// chai()

// const chai = () =>{
//     let username = "Ansh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


// const addTwo = (num1,num2) =>  num1 + num2

// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({username:"Ansh"})


console.log(addTwo(3,4));

//explicit return - when it is required to use return externally
//implicit function = when it is not required to use external return 

// const myArray = [2,3,4,5,6]

// myArray.forEach()














