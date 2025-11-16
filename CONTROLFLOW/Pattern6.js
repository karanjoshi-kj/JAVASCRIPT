let start = 2;

for(let i = 1 ; i<= 10 ; i++){
    let num = start
    let line = "";

    for(j = 1; j<=i ; j++){
        line += num + " ";
        num += 2;
    }
    console.log(line);
    start++
    
}

