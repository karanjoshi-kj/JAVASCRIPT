// todo , FAT ARROW FUNCTION --> ARROW FUNCTION -->ES6 ECMA Script

//  todo ,  a fat arrow function is always defined using const keyword .
// todo , in fat arrow function we does'nt provide the name of function , only variable name is required .
// todo , it is denoted by => . 

//? EXAMPLE 1:
const printhello = () => {
    console.log("radhe radhe");
}
printhello();

//? EXAMPLE 2: FUNCTION REFERENCING  
const add = function addition(a,b) {
    return a+b;
}
console.log("THE ADDITION OF TWO NUMBERS IS:" , add(10,20));


//! NOTE : FATAARROW FUNCTION IS ALWAYS USED FOR SINGLE LINER FUNCTIONS . 

//?EXAMPLE 3:
const add = (a,b) => a+b;  //? HERE THE a+b WILL ACT AS RETURN STATEMENT . 
console.log(add(10,10));

//?EXAMPLE 4:
const add = (a,b) => {
     console.log("HELLO WORLD");  
     return a+b;  //? HERE IT WILL NOT PRINT THE RETURN STATEMENT BCOZZ IT IS USED FOR SINGLE LINER STATEMENT . 
}
add(10,20)
