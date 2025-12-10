// //! RANDOM OTP GENERATOR 

// function generateotp(length){
//     let otp = " ";
//     for (let i = 0; i < length; i++) {
        
//         otp += Math.floor(Math.random() * 10) 
//     }
//     return otp;
// }
// console.log(generateotp(4));
// console.log(generateotp(5));



//? USING WHILE LOOP ...



const generateotp = (length) => {
    let otp = " ";
    let i = 0;
    
    while (i < length) {
        
        otp += Math.floor(Math.random() * 10) 
        i++;
    }
    return otp
    
};
console.log(generateotp(4));
console.log(generateotp(5));