function myfunc(a,b=2,c) {
    console.log("a =" , a);
    console.log("b =" , b);
    console.log("c =" , c);
    
    if (a=== undefined || b === undefined) {
        console.log("ERROR");
    }
    else{
        console.log("ALL ARGUMENTS ARE DEFINED & VALID ");
        
    }
}

  
myfunc(5 , "hello" , 10 , 20 , 30)
myfunc(5)
myfunc(undefined , 3 , 5)

// FUNCTION REFERNCING  
// fat arrow is always defined using const keyword 
// in fat arrow we DOMParser;nt provide the name of the function only variable . 