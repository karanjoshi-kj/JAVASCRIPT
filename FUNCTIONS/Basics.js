// //TODO , BASICS OF FUNCTION :

// // TODO , ADDING OF TWO NUMBERS  . 

// // function addtwonumbers(number1 , number2) { //?in THE FUNCTION WE PASS THE PARAMETERS
// //     console.log(number1 + number2);  //! SCOPE OF THE FUNCTION .. 
// // }
// // ?addtwonumbers --> THIS IS ONLY THE REFERAL OF THE FUNCTION , MEANS IT TELLS THAT THE FUNCTION EXIST HERE.. 
// // addtwonumbers(5,5); //? CALLING OF THE FUNCTION
// //? DURING THE CAALING OF THE FUNCTON WE PASS THE ARGUMENTS .. 

// // TODO , RETURNING OF THE FUNCTION 

// function addtwonumbers(number1 , number2) { //?in THE FUNCTION WE PASS THE PARAMETERS
//     let result = number1 + number2;  //?STORING THE VALUES IN THE RESULT VARIABLE ..
//     return result;//?RETURN RESULT ..
//     console.log("karan");
    
// }
// const result = addtwonumbers(5,5)
// console.log("RESULT:" , result);

// //!NOTE : NO STATEMENT OR VALUES ARE NOT ALLOWED TO PRINT AFTER RETURNING OF THE FUNCTION .. 

// TODO , THERE ARE 4 TYPES OF USER DEFINED FUNCTION 
// ?1. WITHOUT ARGUMENT & WITHOUT RETURNTYPE ..
function greet() {
    console.log("radhe radhe");
}
greet() 

// ?2. WITH ARGUMENT & WITHOUT RETURNTYPE ..
function greet(name) {
    console.log("radhe" +name+ "!");
}
greet("krishna") 

// ?3. WITHOUT ARGUMENT & WITH RETURNTYPE ..
function add(a,b) {
    return 10;
}
let num = add()
console.log(num);

// ?4. WITH ARGUMENT & WITH RETURNTYPE ..
function add(a,b) {
    return a+b
}
let sum = add(5,5)
console.log(sum);
