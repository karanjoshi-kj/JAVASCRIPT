//? one liner single code 

//! NAME K ANDAR MIN. THREE CHARACTER HONE CHAIYE , VALID EMAIL , AGE > 18 USING FAT ARROW 

function usercheck({name, age, email}) {

    return ((name && name.length >= 3)&& (age && age > 18) && (email && email.includes("@") && email.includes("."))) ? 1 : 0 ;
}


const user = {
  name: "ram",
  email: "kjkaranjoshi2006@gmail.com",
  age: 19,
};
console.log(usercheck(user));