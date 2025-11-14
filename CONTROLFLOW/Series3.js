let arr =[]
let odd = 1;
for(let i = 1 ; i<= 5 ; i++){
    let num = i*i;
    let deno = odd**3;

    arr.push(num + "/" +deno)
    odd+=2  // !NEXT ODD NUMBER LANE KE LIYE 
}
console.log(arr.join("+"));
