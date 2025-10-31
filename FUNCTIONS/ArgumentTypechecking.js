obj = {
    "name" : "karan",
    "age" : 19,
    "course-sub" : ["c" , "c++" , "java"],
}
obj1 = 10;
b = 20;

function printval(o,S) {
    console.log(typeof o);
    if (typeof o === "object") {
        console.log(o.name);
        console.log(o.age);
    }
     else{
        console.log("NOT A OBJECT");
     }
}
printval(obj);