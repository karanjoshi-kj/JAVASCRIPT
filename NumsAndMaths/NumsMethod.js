const marks = 100
console.log(marks);

const score = new Number(marks)  // HERE WE ASSIGN SPACE MARKS WITH THE HELP OF NEW KEYWORD IN THE MEMORY AND STORE IN THE SCORE OBJECT ....
console.log(score);
//METHODS :
console.log(score.toString());
console.log(typeof score.toString());  // THIS IS NESTING OF METHODS , FIRST WE CONVERT IT TO STRING AND THEN WE CHECK IT'S TYPE 
console.log(score.toString().length);

console.log(19/3);
console.log((19/3).toFixed(3));  // THIS METHOD WILL FIX THE DECIMAL VALUE TO THREE PLACES ....

const othername = 123.8966
console.log(othername.toPrecision(3)); // THIS METHOD RETURNS A STRING REPRESENTING THIS NUMBER TO THE SPECIFIED NUMBER OF SIGNIFICANT DIGIT 
// EXCEPTION :  THROWN IF PRECISION IS NOT BETWEEN 1 AND 100 (INCLUSIVE).
 
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // IT WILL APPLY COMMAS ON THE STRING ACCORDING TO THE US STANDARD (DEFAULT).....
console.log(hundreds.toLocaleString("en-IN")); // INDIAN FORMAT 

console.log(Math.round(9.4)); // LOWER VALUE 
console.log(Math.round(9.6)); // UPPER VALUE 

