// !    TYPECHECKING 

const usercheck = ({name , age , email}) =>

   (typeof name === "string" && name.length >= 3) && (typeof age === "number" && age >= 18) && (typeof email === "string" && email && email.includes("@") && email.includes("."));

const user = {
  name: "ram",
  email: "kjkaranjoshi2006@gmail.com",
  age: 19,
};


console.log(usercheck(user));
