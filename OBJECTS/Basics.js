// ? THERE ARE TWO METHODS OF DECALRING THE OBJECTS IN JAVASCRIPT 
// ! THROUGH LITERALS .  --> NO FORMATION OF SINGELTON 
// ! THROUGH CONSTRUCTORS . --> FORMATION OF SINGLETON 


// TODO , the value of key object using array .. 
const jsUser2 = {
    "name": "KARAN",  //! INTERNALLY READING THE KEYS AS THE STRING 
    "full name":"KARAN JOSHI",
    // [mysmb1]:"mykey1",
    age: 18,
    "location ARR":["RANIKHET" , "BHIMTAL" , "HALDWANI"],  //! PASSING VALUES TO KEY AS AN ARRAY
    locationOBJ:{0:"RANIKHET" , 1:"BHIMTAL" , 2:"HALDWANI"},  //! PASSING VALUES TO KEY AS AN OBJECT 
    email:"karan@google.com",
    isLogged:false ,
}
console.log(jsUser2["location ARR"][1]);
console.log(jsUser2.locationOBJ[2]);
