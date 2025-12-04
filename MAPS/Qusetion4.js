//? DIRECTLY DESTRUCTURING THE OBJECT IN THE FUNCTION  DEFINATION .. 


function checkuserdata({ name, age, email, clg}) {

  return(name && email && age && clg) ? 1 : 0
}

const user = {
  name: "karan",
  email: "kjkaranjoshi2006@gmail.com",
  age: 19,
  clg : "",
};
console.log(checkuserdata(user)); // 0
