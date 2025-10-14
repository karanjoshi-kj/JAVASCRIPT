// ? OBJECT LITERLAS .. 

const jsUser = {
    name: "KARAN",
    "full name":"KARAN JOSHI",
    age: 18,
    location:"RANIKHET",
    email:"karan@google.com",
    isLogged:false ,
}

// !FIRST METHOD TO ACCESS THE OBJECTS
console.log(jsUser.email);

// !SECOND METHOD TO ACCESS THE OBJECTS --> THIS METHOD IS USEFUL WHEN WE USE KEY VALUES AS THE STRING DATATYPE IN OUR CODE .. 
console.log(jsUser["full name"]);


// ?QUESTION --> DECLARE A SYMBOL AND THEN USE IT AS THE KEYPAIR 

const mysmb = Symbol("key1")
const jsUser1 = {
    name: "KARAN",
    "full name":"KARAN JOSHI",
     mysmb:"mykey1",
    age: 18,
    location:"RANIKHET",
    email:"karan@google.com",
    isLogged:false ,
}

console.log(jsUser1.mysmb);
console.log(typeof jsUser1.mysmb);  //TODO , THIS IS CURRENTLY SHOWING IT'S DATATYPE AS THE STRING BUT WE WE HAVE DECALRE A SYMBOL , THIS MEANS THAT THIS METHOD OF ACCESSING THE SYMBOL IS WRONG .. 


// !SO THE CORRECT METHOD OF DECLARING A SYMBOL IS .. 

const mysmb1 = Symbol("key1")
const jsUser2 = {
    name: "KARAN",
    "full name":"KARAN JOSHI",
    [mysmb1]:"mykey1",
    age: 18,
    location:"RANIKHET",
    email:"karan@google.com",
    isLogged:false ,
}
console.log(jsUser2[mysmb1]);

