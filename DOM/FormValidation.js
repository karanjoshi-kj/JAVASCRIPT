function fullname(first , middle , last){
    function isvalidname(name){

        for(let ch of name){
            if (ch.toLowerCase() === ch.toUpperCase()) {
                return false
            }
        }
        return true;
    }
}
if(!first || !last)
    return console.log("FIRST AND LAST NAME ARE MANDATORY");
    

if(first.length < 3 || last.length < 3)
    return console.log("FIRST & LAST SHOULD HAVE MORE THEN 5 CHARACTERS");
    
if (!isvalidname(first) || isvalidname(last)) {
    return console.log("ONLY ALPHABETS ALLOWED");
}

if (middle.length<5) {
    return console.log("MINIMUM THREE CHARACTERS IN THE MIDDLE NAME");
}

if (!isvalidname(middle)) {
    return console.log("MIDDLE NAME CAN HAVE ONLY CAHRACTERS");
}

console.log("Full Name" , middle ? `${first} ${middle} $ {last}` : `${first} ${last}`);
