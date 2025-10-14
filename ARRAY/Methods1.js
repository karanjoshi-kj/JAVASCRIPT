arr = [5,8,9,10,12]
console.log(arr.includes(9));  // ! IT RETURNS BOOLEAN DATATYPE 

console.log(arr.indexOf(8));
console.log(arr.indexOf(50));  // ! IF THE ELEMENT DOES'NT EXIST IT WILL RETURN -1 

// ? JOIN METHOD --> HOLDS THE RESULT ON THE THIRD ARRAY .. 
arr2 = [10.20,30]
arr3 = arr.join(arr2)
console.log(arr3); 

// TODO : AT METHOD GIVES THE INDEX VALUE OF A PARTICULAR ELEMENT .. 
console.log(arr.at(3));


// ! conversion to array 
let a=10;
let b=20;
let c=30;

d=Array.of(a,b,c)
console.log(d);


// ? SPREAD OPERATOR 
a1 = [1,2,3,4,5,6,7,8];
a3 = Array.of(a1 , a , b , c) // ! THIS WILL DO NESTED ARRAY IN THE A3 ARRAY , BUT IF I DON'T WANT TO DO IT SO I WILL USE NESTED ARRAY ..
console.log(a3);

// ?TO SHOW SPACE BETWEEN TO ARRAYS 
console.log();
console.log();
console.log();
console.log();

a4 = Array.of(...a1 , a , b , c);
console.log(a4);







