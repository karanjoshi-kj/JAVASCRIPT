let date1 = new Date();
console.log(date1);

console.log(typeof date1);
console.log(date1.toString());
console.log(date1.toISOString());
console.log(date1.toLocaleString());

let datetoday1 = new Date(2025,9,15,5,3,1);  // NUMBER FORMAT 
let datetoday2 = new Date("") // INAVLID DATE
console.log(datetoday1.toLocaleString());
console.log(datetoday2.toLocaleString());




