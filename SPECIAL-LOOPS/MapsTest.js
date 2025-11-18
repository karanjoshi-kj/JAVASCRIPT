// For While Do while

// a = [1, 2, 3, 5, 6, 7, 8];

// for (i = 0; i < 7; i++) {
//   console.log(a[i]);
// }

// there are 3 types of another loops which direclty iterates over object & array!!

// forof
// foreach
// forin

const arr = [2, 4, 6, 36, 3, 63, 62, 633, "#"];

// for (const iteratorvariable of pass the name of array or object on which it is to iterated ) {

// }

// FOR OF LOOP --> DIRECTLY ITERATEABLE OVER ARRAY
// FOR OF LOOP IS DIRECLTLY ITERATEBALE OVER STRINGS
str = "Subham@#$%^&";

for (const shubham of arr) {
  //   console.log(shubham);
}

// for (const element of object) {
// }

obj = {
  name: "Karan",
  college: "BIRLA",
  Course: "B.Tech",
};
// console.log(obj);

for (const element of Object.keys(obj)) {
  //   console.log(element);
}
for (const element of Object.values(obj)) {
  //   console.log(element);
}

//Array Destructing
for (const [karan, shubham] of Object.entries(obj)) {
  // console.log(`${karan}: ${shubham}`);
  // console.log(`${shubham}: ${karan}`);
}

// MAPS
// maps are duplicate copies of objects
// it also take key value pairs

obj = {
  name: "karan",
  name1: "Karan",
};
// console.log(Object.keys(obj).length);

// const mapp = new Map();
// mapp.set("IN", "India");
// mapp.set("UK", "Uttarakhand");
// mapp.set("UK", "Uttarakhand");
// mapp.set("UK", "Uttarakhand");
// mapp.set("UK", "Uttarakhand");
// console.log(mapp);
obj = [
  { name: "Karan", course: "Btech" },
  { name: "Shubham", course: "Btech" },
];

const m = new Map([
  //Nested Array
  ["IN", "India"],
  ["UK", "Uttarakhand"],
  ["UP", "Uttar Prdesh"],
]);
// console.log(...m);

// Adding Value to Map
// set function
m.set("CH", "Chandigarh");
console.log(...m);

// Getting value from map using Key | key or other things fllows Case Senstitivity in JS
console.log(m.get("UK"));

//deleting values from map
m.delete("UK");
console.log(m);

// clear method is used to clear the map without giving any prompt
// m.clear(); //same as of truncate
// console.log(m);

console.log(m.size);

// to check whether the data is present or not in the map

console.log(m.has("UP")); //it will return the output in Bool