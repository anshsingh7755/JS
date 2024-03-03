 // date

 let myDate = new Date()

//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toJSON());
//  console.log(myDate.toLocaleString());
//  console.log(typeof myDate);

//  let myCreatedDate = new Date(2023, 0 , 23)
//  let myCreatedDate = new Date(2023, 0 , 23 , 5 , 3)
 let myCreatedDate = new Date("01-14-2024")

//  console.log(myCreatedDate.toLocaleString());

 let myTimestamp = Date.now()

//  console.log(myTimestamp);

//  console.log(myCreatedDate.getTime());
//  console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate);

console.log(newDate.getMonth());


newDate.toLocaleString('default', {
    weekday: "long", 
    
})


