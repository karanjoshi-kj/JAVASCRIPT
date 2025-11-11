for(let i=1 ; i<=50 ;i++){
    let temp = i;  //? number store kar liya
    let rev = 0;  //? reverse number
    let num = i;  //?original number store 

    while (temp>0) {
        let digit = temp%10;
        rev = (rev*10)+digit

        temp = Math.floor(temp / 10)
    }
    if (num===rev) 
        console.log(num);
}