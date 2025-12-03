// TODO  MAPS ARE THE OBJECT THAT HOLDS THE KEY VALUE PAIR WITH NO DUPLICATE VALUES . 


const map = new Map();
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('FR',"French")
map.set('IN',"India")   //? THIS KEY VALUE PAIR WILL NT PRINT OVER THE SCREEN BCOZZ MAPS DO NOT PRINT THE DUPLICATE KEY VALUE PAIRS . 


// console.log(map);



//! NOW APPLYING THE SPECIAL LOOPS ON THE MAPS .. 

for (const element of map) {
    console.log(element);  //? THIS WILL PRINT THE COMPLETE MAP VALUES IN THE ARRAY FORM , BUT NOT THE DUPLICATE VALUES . 
}


//! NOW IF I WANT TO PRINT THE VALUES OUTER FROM THE ARRAY -->
//? WE HAVE TO DECONSTRUCT THE ARRAY . 

for (const [key , value] of map) {
    console.log(key , "-->" , value);
}

//! USING THE FOR OF LOOP IN THE OBJECTS .--> BECAUSE OBJECTS ARE DIRECTLY NOT ITERATABLE 

//? WE DON'T USE FOR OF FOR OBJECTS HERE WE USE FOR IN LOOP . 

