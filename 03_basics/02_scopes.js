// var c = 300              // code written outside the scope is called global scope


let a = 300
if (true){
    let a = 10
    const b = 20           //code written inside the scope or if or braces is called block scope
    // console.log("INNER", a);
}




// console.log(a);
// console.log(b);
// console.log(c);

//**when we check global scope in browser it is different from the terminal check of global scope


function one(){
    const username = "Ansh"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Ansh"
    if (username === "Ansh"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++ interseting +++++++++++++++++++++//






console.log(addOne(5))




function addOne(num){
    return num + 1
}


addTwo(5)

const addTwo = function(num){
    return num + 2
}
//it gives error in secon call of addTwo bcz it is not holded in any external variable  
// like addTwo
// we try to access a function before its declaration 





