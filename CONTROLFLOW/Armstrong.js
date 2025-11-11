for(let i = 1 ; i<= 500 ; i++){
    let sum = 0 , n = i;

    while (n>0) {
        let d = n % 10
        sum += d*d*d;
        n = Math.floor(n/10);
    }
    if(sum === i)
        console.log(i);
        
}