// WE WILL DISCUSS METHODS IN ARRAY . 
let arr1  = [1,5,"karan" , 18 , "hii"];
 console.log(arr1);
 console.log("the size of the array is" , arr1.length);


 let arr2  = [1,10,"karan" , 18 , "hii"];
 console.log("the size of the array is" , arr2.length);

let arr3 = [1,2,5,8,7]
console.log(arr3)
arr3.push(10);
arr3.push(12,23,65);
arr3.pop() // IT REMOVES THE LAST VALUE ..

let arr4 = [2,4,9,[523,45,12,90]]  //NESTED ARRAY AS WHOLE ONE ELEMENT FOR THE OUTER ARRAY ...
console.log(arr4.length);
console.log(arr4[3].length);  //TO FIND THE LENGHT OF THE NESTED ARRAY ..

console.log(arr4.pop);
// POP FROM THE FIRST ELEMENT .. 
arr4.shift();
console.log(arr4); 

//PUSH ELEMENT AT THE FIRST .. 
arr4.unshift([11,22,33,44])
console.log(arr4);








