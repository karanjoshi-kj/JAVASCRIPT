// let a = 10; //! GLOBAL
// function localscope(){
//     let a ; //? UNDEFINED
//     console.log(a);
// }
// localscope();
// console.log(a);  //? OUT OF LOCAL SCOPE 


    
function account() {
    balance = 1000;
    console.log("ACCOUNT" , balance);
    balance = depositeamount(balance);
    console.log("UPDATED BALANCE VALUE:" , balance);
    
}
function depositeamount(bal) {
    console.log("DEPOSITE FUNCTION" , bal);
    depositeamt = 100;
    bal = bal + depositeamt;
    console.log("VALUE OF BAL" , bal);
    
    return bal;
}
