const user = {
    username : "Ansh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got user details");
    }
}

console.log(user.username);
console.log(user.getUserDetails);