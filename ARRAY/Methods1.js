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




