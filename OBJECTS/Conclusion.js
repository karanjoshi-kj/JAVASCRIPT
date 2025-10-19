// // TODO , THERE IS THIRD METHOD OF DECALRING AND DEFINING THE OBJECTS IN JAASCRIPT 

// const obj = {};
// console.log(obj);

// obj.name = "karan joshi"
// age = 19;

// obj.name = "karan"
// obj.age = 20
// console.log(obj);

// // ? POINTS TO BE NOTED 
// // !SEE CAREFULLY I HAD DECLARED THE NAME & AGE EARLIER BUT WHEN I HAVE UPDATED IT IT GETS UPDATED ..  

// // TODO , MEANS STRINGS ARE MUTABLE IN NATURE ..

// // !CONDITIONS OF MUTABILITY 
// // TODO , 1CONDITION 
// // ?THE INDEX VALUES MUST NOT BE CHANGED .. 

// // TODO , IMPORTANT NOTE : 
// // TODO , 2CONDITION 
// // ?IT MUST PERFORM THE CRUD METHOD 
// // ? 1.  C --> CREATE 
// // ? 2.  R --> READ 
// // ? 3.  U --> UPDATE
// // ? 4.  D --> DELETE

// TODO , IMPORTANT NOTE FOR INTERVIEW POV :
 obj1 = {1:"karan" , 2:"bhawesh" , "dep":"cse"},
 obj2 = {1:"karan" , 2:"bhawesh" , "dep":"cse"}
 obj3 = {obj1 , obj2};
 obj4 = {obj3}; //? YHA PAR ABB OBJ3 OBJECT OBJ4 KA CHILD HOGA ..

 console.log(obj3);
 console.log(obj4);
 