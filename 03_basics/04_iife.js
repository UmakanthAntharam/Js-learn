// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();     // semicolon  is mandatory here to execute.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);   //un name iife
} )('Umakanth')