const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
//    console.log(key);
//    console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('NP',"Nepal")
map.set('IN',"India")

for (const key in map) {
    
    console.log(key);
}