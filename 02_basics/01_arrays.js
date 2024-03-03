//array 

const myArr = [0,1,2,3,4,5]

const myHeroes = ["dc","marvel","neon"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[3]);

// Array methods

// myArr.push(6)  // add values to arrray
// myArr.push(7)  // add values to arrray

// myArr.pop()  //remove last element from the array

// myArr.unshift(9) //to add a value in the front of a strign
// myArr.shift() //to remove a value in the front of a strign

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//*******slice and splice
//** in slicing the array remains sam

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);