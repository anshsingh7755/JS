//const tinderUser = new Object() //singelton object 
 const tinderUser = {} //non-singelton object 

tinderUser.id = "123abc"
tinderUser.name = "Ansh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ansh@gmail.com",
    fullname : {
        userfullname: {
            firstname: "ansh",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({} ,obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const  users = [
    {
        id: 1,
        email: "ansh@gmail.com",
    },
    {
        id: 1,
        email: "ansh@gmail.com"
    },
    {
        id: 1,
        email: "ansh@gmail.com"
    },
    {
        id: 1,
        email: "ansh@gmail.com"
    },
    {
        id: 1,
        email: "ansh@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    coursename:"js",
    price:1000,
    courseTeacher: "ansh"
}
//course.courseTeacher

const {courseTeacher:sir} = course

// console.log(courseTeacher);
console.log(sir);

//api - apni problems doosre sir

//JSON

// {
//     "name": "ansh";
//     "coursename":"js",
//     "price":"free"
// }

//in js we first learn how the fetch method works with the help of that we call this url and in resoponse we get this DataTransfer
//and with the help of bject we will take out data







