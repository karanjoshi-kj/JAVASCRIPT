//! RANDOM OTP GENERATOR 

function generateotp(length){
    let otp = " ";
    for (let i = 0; i < length; i++) {

        otp += Math.floor(Math.random() * 10) 
    }
    return otp;
}
console.log(generateotp(4));
console.log(generateotp(5));
