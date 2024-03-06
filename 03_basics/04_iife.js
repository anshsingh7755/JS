/*immediately invoked function expressions(IIFE) - we use 2 paranthesis 
first one is where we write the definition of the the function and second one 
is used for the execution calls
**we use iife to remove the global pollution so that it does not cause us prblm
*/

// function cahi(){
//     console.log(`DB CONNECTED`);
// }

// cahi()


(function cahi(){
    //name iife
    console.log(`DB CONNECTED`);
})();

( (name) =>  {
    //unnamed iife
    console.log(`DB CONNECTED TWO  ${name}` );
})('ansh')

// we can write two iife by using semicolon after one function