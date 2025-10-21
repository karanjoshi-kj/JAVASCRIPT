function loginuserMessage(username) {
    return `${username} just logged in` //?STRING INTERPOLATION METHOD IN JS TO PRINT A METHOD .. 
}
console.log(loginuserMessage("karan"));
console.log(loginuserMessage()); //? THIS WILL PRINT THE UNDEFINED VALUE BCOZZ WE HAD NOT DEFINED ANY VALUE ..

// TODO , IF I WANT TO PRINT A MESSAG E IF USER GAVE THE UNDEFINED MSG THEN WE USE THE IF-ELSE STATEMENT 
function loginuserMessage(username) {
    if (username === undefined) {
        console.log("please enter a valid username : ");
        return //! THIS STATEMENT IS NECCESARRY BCOZZ AFTER THE RETURN STATEMENT NO STATEMENT WO=ILL BE FURTHER EXECUTED .. 
    }
    return `${username} just logged in` 
}
console.log(loginuserMessage());

// TODO ,  IF I WANT TO GIVE SOME DEFAULT VALUES .. 

function loginuserMessage(username = "bhawesh") {
    if (!username) { //? WE ASSUME THAT USERNAME IS THE TRUE VALUE SO IF THE VALUE IS FALSE THEN ONLY IT WILL GO TO IF STATEMENT ..  
        console.log("plzz enter a valid username");
        return ;
    }
       return `${username} just logged in`
}
console.log(loginuserMessage());
console.log(loginuserMessage("karan"));  //? KARAN WILL OVERRIDE BHAWESH BCOZZ BHAESH IS THE DEFAULT PARAMETER .. 

