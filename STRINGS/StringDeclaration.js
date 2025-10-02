// STRING IS AN OBJECT OR A KEY-VALUE PAIR IN JS 
// JS INTERNALLY READS THE STRING IN THE SINGLE QUOTES EITHER IT IS WRIITEN IN DOUBLE QUOTES OR IN SINGLE QUOTES . 

// DECLARATION OF THE STRING .. 
const gamename = new String('karanjoshi-kj');
console.log(gamename[0]); // ACCESSING THE 0TH KEY ..
console.log(gamename.__proto__); // ACCESSING THE PROTOTYPE ..

// METHODS IN STRING .. 
console.log(gamename.length);
console.log(gamename.toUpperCase()); //NOTE: IT DOES'NT HAVE CHANGE THE ORIGINAL STRING 
console.log(gamename.charAt(2));  
console.log(gamename.indexOf('j'));  

const newstring = gamename.substring(0,4) //NOTE : HERE 4 IS NOT INCLUDED MEANS VALUES ARE PRINTED TILL THE THIRD INDEX ONLY :..
console.log(newstring);

// NOTE : WE CAN TAKE (-)VE VALUES ONLY IN THE SLICE METHOD NOT IN THE SUBSTRING METHOD ....
const anotherstring = gamename.slice(-9,-3)
console.log(anotherstring);



