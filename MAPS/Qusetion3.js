function checkuserdata(user) {
  const { name, age, email } = user;

  return(name && email && age) ? 1 : 0
}

const user = {
  name: "karan",
  email: "kjkaranjoshi2006@gmail.com",
  age: 19,
};
console.log(checkuserdata(user));
