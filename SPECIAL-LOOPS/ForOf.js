// //! there are 3 types of another loops which direclty iterates over strings , object & array!!

// // !forof
// // !foreach
// // !forin

// // TODO , FOR-OF -->  DIRECT ITERATION OVER ARRAY ..

// // arr = [10,20,"$",50,80];  //?JAVASCRIPT TREAT ARRAY AS AN OBJECT . 
// // for (const i of arr) {
// //     console.log(i);
// // }



// // // TODO , FOR-OF -->  DIRECT ITERATION OVER STRING ..

// // str = "kjkaranjoshi2006@gmail.com"
// // for (const karan of str) {
// //     console.log(karan);
// //     //?HERE KARAN IS ONLY AN ITERATOR OVER STRING STR .. 
// // }


// // TODO , FOR-OF -->  DIRECT ITERATION OVER OBJECT ..


// // TODO ,FOR OF LOOP IS NOT DIRECTLY ITERTABLE ON THE OBJECT .. 
// obj = {
//     name : "karan",
//     colleg : "BIAS",
//     age : 19,
// };

// for (const i of Object.keys(obj)) {  //? THIS WILL PRINT KEY-PAIRS ..  
//     console.log(i);
// }
// for (const i of Object.values(obj)) {  //? THIS WILL PRINT VALUE-PAIRS ..  
//     console.log(i);
// }


//! NOW IF WE WANT TO PRINT BOTH KEY VALUE PAIR TOGETHER THEN THIS IS THE CONCEPT .. 

// for (const [karan, shubham] of Object.entries(obj)) {
//   console.log(`${karan}: ${shubham}`);
//   console.log();
//   console.log(`${shubham}: ${karan}`);
// }



a1 = [1,2,3,[(1,2,33,[11,12,13,14])]]

for(const key in a1){
    let pp = a1[3];
    console.log(pp);
    
}