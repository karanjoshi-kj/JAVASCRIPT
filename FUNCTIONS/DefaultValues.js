function greet(name = "Guest") {
    console.log("HELLO," +name+ "!");
}
greet("KARAN");
greet();


function add(a = 5 , b = 10) {
    return a+b;
}


console.log(add(2,3));
console.log(add(18));
console.log(add());
