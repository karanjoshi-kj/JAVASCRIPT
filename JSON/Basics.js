// TODO , WHAT IS JSON 
//! --> JAVASCRIPT OBJECT NOTATION
//? PROPRERTIES :
//? 1. LIGHTWEIGHT DATA FORMAT 
//? 2. EASY TO WRITE 
//? 3.LANGUAGE INDEPENDENT 

//! USES 
// ? 1. API 
// ? 2. CONFIG FILES
// ? 3. DATA STORAGE 

//! BASICS STRUCTURE
//? DATA IS STORED IN KEY-VALUE PAIR .

//!THIS IS AN INVALID JSON BCOZZ JSON CANNOT HAVE VARIABLE ASSIGNMENT LIKE INFO , IT MUST HAVE A SINGLE VALUE(OBJECT & ARRAY)
const info = {
    "name":"karan",
    "age":19,
    "isstudent":true,
    "skills":["java" , "pyhton" , "c++" , "DSA"],
    "address":{
        "street":"1/24",
        "city":"ranikhet",
        "pincode":263645
    }
}

//TODO , VALID JSON -->
const data = {
    name: "karan",
    age: 19,
    isstudent: true,
    skills: ["java", "python", "c++", "DSA"],
    address: {
        street: "1/24",
        city: "ranikhet",
        pincode: 263645
    }
};

console.log(data.skills[2]); // ✅ Output: c++
