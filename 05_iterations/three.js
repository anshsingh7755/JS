//array specific loops
// for of  

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`each char is $(greet)`);
}


// maps

const map = new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('NP',"Nepal")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
    'G1' : 'NFS',
    'G2' : 'GTA'
}

for (const [key , value] of myObject) {
    console.log(key, ': ' , value);
}
