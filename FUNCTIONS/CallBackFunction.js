// TODO , A CALLBACK FUNCTION IS A CONCEPT WHEN A FUNCTION IS PASSED AS AN ARGUMENT TO THE ANOTHER FUNCTION .

function username() {
    return "krishna"
}
function printhello(name) {
    console.log(name());
}
printhello(username)  //? HERE USERNAME IS ACTUAL ARGUMENT WHICH MAKES A COPY OF THE RETURN STATEMENT ON THE NAME ARGUMENT . 