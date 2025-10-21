function calulateshoppingcart(num1) {
    return num1
}
console.log(calulateshoppingcart(200,300,400,500)); // ? THIS WILL PRINT ONLY THE FIRSR VALUE .. 

// TODO , NOW IF I WANT TO PRINT THE ALL THE VALUES WE WILL USE THE REST OPERATOR WHICH HAS THE SIMILAR SYTAX AS OF SPREAD OPERATOR 
function calulateshoppingcart(...num1) {
    return num1
}
console.log(calulateshoppingcart(200,300,400,500)); //? CONVERT IT TO ARRAY SUBSCRIPT .. 

// ?😋😋 CONCEPT:
function calulateshoppingcart(val1 , val2 , ...num1) {
    return num1
}
console.log(calulateshoppingcart(200,300,400,500)); // ? FIRST TWO ARGUMENT VALUES WILL GO ON THE THE VAL1 , VAL2 .. 

// TODO , FUNTIONS WITH OBJECT .. 
const user = {
        username : "karan",
        age : 19
}
function Handleobject(Anyobject) { //? WE CAN PASS ANY PARAMETER TO IT  .. 
    console.log(`username is ${Anyobject.username} & age is ${Anyobject.age}`);
}
Handleobject(user)

// TODO , FUNCTIONS WITH ARRAY.. 
