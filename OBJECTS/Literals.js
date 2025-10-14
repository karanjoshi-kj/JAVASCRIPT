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

// TODO , NOW SOME BASIC TERMINOLOGIES OF OBJECT ..


// ? , IF WE WANT TO CHANGE THE EMAIL
jsUser2.email = "Karanjoshi@microsoft.com";
console.log(jsUser2.email);

// TODO , LET SAY IF WANT TO LOCK A KEY VALUE MEANS NO ONE CAN CHANGE IT .
jsUser2.email = "Karanjoshi@microsoft.com";
// Object.freeze(jsUser2)
jsUser2.email = "karanjoshi@faang.com" //? THERE WILL BE NO CHANGE BCOZZ WE HAD FREEZE THE KEY VALUE ....
console.log(jsUser2); //! NOTE : HERE THE SYMBOL WILL DIRECTELY COME BEFORE THE KEY VALUE BCOZZ WE HAD USE THE  SQUARE BRACES .. 

// TODO , IF WE WANT TO ADD AN KEY VALUE PAIR ..
jsUser2.greeting = function () {
    console.log("HI,EVERYONE !!!!!");
}
console.log(jsUser2.greeting); //! THIS WILL PRINT  UNDEFINED 
console.log(jsUser2.greeting()); //! THIS WILL SHOW AN ERROR BCOZZ WE HAD FREEZE THE OBJECT .. , SO TO RESOLVE THE ERROR APLLY COMMENTS ON  THE OBJECT FREEZE .. 

// ? , IF I WANT TO REFER THE OBJECT NAME .. 
jsUser2.greetingtwo = function () {
    console.log(`HI,EVERYONE !!!!! , ${this.name}`);
}
console.log(jsUser2.greeting());
console.log(jsUser2.greetingtwo());
