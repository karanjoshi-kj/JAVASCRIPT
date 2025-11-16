for(let i = 1 ; i <= 5 ; i++){
    let line = "";
    // A = 65;   //? LOCAL VARIABLE CAN BE UPDATE BUT GLOBAL NOT 
    for(let j = 0 ; j < i ; j++){
        A = 65;
        line += String.fromCharCode(A++)
    }
    console.log(line);   
}

