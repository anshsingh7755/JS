const score = 450

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
 
const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));


//*****************MATHS**********************//


// console.log(Math);

// console.log(Math.abs(5));
// console.log(Math.abs(-5));
// console.log(Math.round(5.8));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,6,3,3,21,9));
// console.log((Math.random()*10) + 1);
// console.log(Math.floor((Math.random()*10)) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min);

/*  math.random gives values btw 0 and 1 
if we add whe we multiply by 10 but sometimes it gives 0.01 so we add +1
another case is define min and max
we do (max - min + 1)+min*/
