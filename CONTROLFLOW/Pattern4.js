
for (let i = 1; i <= 5 ; i++) {
    let line = "";
    for(let j = 1 ; j<= 5 ; j++){
        if(j <= 5-i)
            line += " ";   //? THIS IS FOR SPACES .. 
        else
            line += "*"
    }
    console.log(line);
}