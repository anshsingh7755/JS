const user = {
    username : "Ansh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const  userOne = User("ansh", 10 , true)

console.log(userOne);







