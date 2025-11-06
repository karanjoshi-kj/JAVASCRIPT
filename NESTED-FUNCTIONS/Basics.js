// ?uses stack for evaluation . 
// ?when we call a function inside another function is called nesting function . 

function outeradd(a,b) {
    function add() {
        return a+b;
    }
    return add()
}
let result = outeradd(10,5);
console.log("sum=" , result);


function add() {
    a=10;
    b=20;
    return a+b;
}
function mul() {
    x=50
    y=30
    return o = x+y*add() 
}
console.log(mul());
