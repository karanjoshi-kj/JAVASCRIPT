//  TODO ,USING FOR IN .. 
arr = [10,20,30,40,50]
let sum = 0 ;

for(let i in arr){
    sum += arr[i]; 
}
console.log("SUM = " ,sum);


//  TODO ,USING FOR OF .. 
arr = [10,20,30,40,50]
let sum1 = 0;

for(let i of arr){
    sum1 += i;
}
console.log("SUM=",sum1);
