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
console.log(regularuser.fullname.userfullname.firstname);
``
// TODO , MERGING OF THE TWO OBJECTS......
obj1 = {1 : "a" , 2 : "b"}
obj2 = {3 : "c" , 4 : "d"}
// ?METHOD 1 :const obj3 = Object.assign(obj1 , obj2)
// ?METHOD 2 --> IT IS GOOD METHOD FOR MERGING OF THE OBJECTS IN JAVASCIRPT BCOZZ THIS IS AN OPTIONAL PARAMETER WHICH ACTS AS TARGET FOR OTHER SOURCE ....  
// const obj3 = Object.assign({} , obj1 , obj2) //! OBJECT ASSIGN IS A STATIC METHOD .. 
console.log(obj3);
// TODO , BUT WE DON'T USE THESE METHODS ON INDUSTRIES , WE USE SPREADING CONCEPT 
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


// TODO , WHEN VALUES COMES FROM THE DATABSES WE USE ARRAY OF OBJECS .. 

const users = [
    {
        id:1,
        email:"karan@gmail.com"
    },
    {
        id:2,
        email:"karan@gmail.com"
    },                                 
    {
        id:3,
        email:"karan@gmail.com"
    },
]

users[1].email
console.log(regularuseruser);


// !INTERVIEW TOPICS :  
obj1 = {"full-name" : "karan" , "age" : 19},
obj2 = {"full-name" : "karan" , "age" : 19}
obj3 = {...obj1 , obj2}  // TODO , NOW OBJ1 ARE DIRECT KEY VALUE PAIR FOR OBJ3 & WE DON'T SPREAD THE OBJ2 SO OBJ2 IS KEY FOR OBJ1 AND ITS CURLY BARCES ELEMENTS ARE IT'S VALUES         
console.log(obj3);
