//TODO , BASICS OF FUNCTION :

// TODO , ADDING OF TWO NUMBERS  . 

// function addtwonumbers(number1 , number2) { //?in THE FUNCTION WE PASS THE PARAMETERS
//     console.log(number1 + number2);  //! SCOPE OF THE FUNCTION .. 
// }
// ?addtwonumbers --> THIS IS ONLY THE REFERAL OF THE FUNCTION , MEANS IT TELLS THAT THE FUNCTION EXIST HERE.. 
// addtwonumbers(5,5); //? CALLING OF THE FUNCTION
//? DURING THE CAALING OF THE FUNCTON WE PASS THE ARGUMENTS .. 

// TODO , RETURNING OF THE FUNCTION 

function addtwonumbers(number1 , number2) { //?in THE FUNCTION WE PASS THE PARAMETERS
    let result = number1 + number2;  //?STORING THE VALUES IN THE RESULT VARIABLE ..
    return result;//?RETURN RESULT ..
    console.log("karan");
    
}
const result = addtwonumbers(5,5)
console.log("RESULT:" , result);

//!NOTE : NO STATEMENT OR VALUES ARE NOT ALLOWED TO PRINT AFTER RETURNING OF THE FUNCTION .. 