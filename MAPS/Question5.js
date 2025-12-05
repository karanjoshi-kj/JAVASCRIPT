//! NAME K ANDAR MIN. THREE CHARACTER HONE CHAIYE , VALID EMAIL , AGE > 18 USING FAT ARROW 

function usercheck({name, age, email}) {
    const isnamevalid = name && name.length >= 3;
    const isvalidemail = email && email.includes("@") && email.includes(".")
    const isvalidage = age && age > 18 ;

    return (isnamevalid && isvalidage && isvalidemail) ? 1 : 0 ;
}



const user = {
  name: "ram",
  email: "kjkaranjoshi2006@gmail.com",
  age: 19,
};
console.log(usercheck(user));
