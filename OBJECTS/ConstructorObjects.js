// !SINGLETON OBJECT 
// const instauser = new object()
// console.log(instauser);

// !NON-SINGLETON OBJECT  
const instauser1 = {}
instauser1.id = "587user"
instauser1.name = "RAJ"
instauser1.isLoggedin = false
// console.log(instauser1);


const regularuser = {
     email:"karanjoshi@goggle.com",
     fullname:{
        userfullname:{
            firstname:"karan",
            lastname:"joshi"
        }
     }
}
// ?ACCESSING OF NESTED OBJECCTS
// console.log(regularuser.fullname.userfullname.firstname);

// TODO , MERGING OF THE TWO OBJECTS......
obj1 = {1 : "a" , 2 : "b"}
obj2 = {3 : "c" , 4 : "d"}
const obj3 = Object.assign(obj1 , obj2)
console.log(obj3);
