const user = {
    username : "karan",
    age : 19,
    printname(){   //? NO NEED TO WRITE THE FUNCTION BEFORE THE FUNCTION NAME BCOZZ OBJECTS ARE KEY-VALUE PAIR & FUNCTION NAME ACT AS KEY AND IT'S DEFINATION ACT AS VALUES .. 
        console.log(user.username);
    }
}
console.log(user.username);
user.printname();


//! NOW IF I HAD CHANGE THE OBJECT NAME & MULTIPLE METHODS INSIDE N OBJECT THEN WE HAVE TO CHANGE THE OBJECT NAME IN EVERY FUNCTION THEN HERE THE COMPLEXITY INCREASES , SO WE USE THE THIS KEYWORD .. 

const userdata = {
    username : "karan",
    age : 19,
    printname(){   //? NO NEED TO WRITE THE FUNCTION BEFORE THE FUNCTION NAME BCOZZ OBJECTS ARE KEY-VALUE PAIR & FUNCTION NAME ACT AS KEY AND IT'S DEFINATION ACT AS VALUES .. 
        console.log(this.username);
    }
}
console.log(userdata.username);
userdata.printname();
