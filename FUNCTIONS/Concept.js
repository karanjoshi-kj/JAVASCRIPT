function loginuserMessage(username) {
    return `${username} just logged in` //?STRING INTERPOLATION METHOD IN JS TO PRINT A METHOD .. 
}
console.log(loginuserMessage("karan"));
console.log(loginuserMessage()); //? THIS WILL PRINT THE UNDEFINED VALUE BCOZZ WE HAD NOT DEFINED ANY VALUE ..

//TODO , IF I WANT TO PRINT A MESSAG E IF USER GAVE THE UNDEFINED MSG THEN WE USE THE IF-ELSE STATEMENT 
function loginuserMessage(username) {
    if (username === undefined) {
        console.log("please enter a valid username : ");
        return //! THIS STATEMENT IS NECCESARRY BCOZZ AFTER THE RETURN STATEMENT NO STATEMENT WO=ILL BE FURTHER EXECUTED .. 
    }
    return `${username} just logged in` 
}
console.log(loginuserMessage());
