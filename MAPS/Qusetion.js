const user = {
    name : "karan",
    email : "kjkaranjoshi2006@gmail.com",
    age : 19
};

//? DESTRUCTURING . 
const {name , email , age} = user;

if (name && email && age) {
    console.log("all data is obtained");
 }

    if (!name || !email || !age) {
            console.log("data is missing ");
        
}