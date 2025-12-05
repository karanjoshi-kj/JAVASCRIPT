//! USING FATARROW METHOD .   ==> WITHOUT RETURN STATEMENT . 

const usercheck = ({name , age , email}) =>

    (name?.length >= 3) && (age >=18) && (email && email.includes("@") && email.includes(".")) ? 1: 0 ;

const user = {
  name: "ram",
  email: "kjkaranjoshi2006@gmail.com",
  age: 19,
};

console.log(usercheck(user));
