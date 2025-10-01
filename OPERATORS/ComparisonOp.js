//DURING COMPARISON THE COMPILER SOMETIMES NOT GIVES THE PREDECTIVE VALUE :

var a = 5
var b = "5"
console.log(a==b); // DOUBLE EQUAL (==) OPERATOR Returns true if the operands are equal 
console.log(a===b);
// STRICT EQUAL (===) Returns true if the operands are equal and of the same type.


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// THE REASON OF THE DIFFRENT OUTPUT IS THE DIFFRENT WORKING OF THE EQUALITY CHECK(==) AND THE COMPARISON(> , < , >= , <=)
// comparison operator converts null to a number , treating it as 0 ..

// NOTE:
// UNDEFINED OPERAOTR ALWAYS GIVES FALSE VALUE ON BOTH COMPARISON AND EQUALITY 



// IT WILL GIVE NULL BECOZZ NULL HAS THE HIGHER PRIORITY THEN UNDEFINED..:
null == undefined
console.log(null);