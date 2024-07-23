
// 1. The function which excecute immediately is called IIfE.
// 2. to prevent from the pollution of Global Scope we use IIFE(Immediate Invoke Function Expression) Fumction.

function one(){
    console.log(`DB CONNECTED`)
}
one(); // here function is immediatly called.

// another way to call IIFE is "()()"

(function two(){
    console.log(`DB CONNECTED`)
})();

// here function dont know where to stop, which gives error and to avoid error we use ";" at the end of the first code


// IIFE using arrow fuction
(  (name) => {
    console.log(`DB CONNECTED ${name}`)
})("Deepak")




