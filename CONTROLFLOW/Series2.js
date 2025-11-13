let str = " ";

for(let i = 1 ; i<= 10; i+=2){
    // if (i<10) 
        str += (i<10)? `${i} + ${i+1}/${i+2}` : `${i}` 
}
console.log(str);
