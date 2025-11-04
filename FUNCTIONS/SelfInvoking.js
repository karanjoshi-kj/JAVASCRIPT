// TODO , THE FUNCTION DID'NT REQIURE EXTERNAL CALLING IS CALLED SELF INVOKING FUNCTION . 
// TODO , IT IS ALSO KNOWN AS ANONYMS FUNCTION . 


(function selfinvoking() {
    console.log("RADHE RADHE");
})();



(function selfinvoking() {
    const date = new Date().toString();
    console.log("INDIAN STANDARD TIMING");
    console.log(date);
})();


// !,WE CAN ALSO PASS ARGUMENTS IN THE SELF INVOKING FUNCTION . 
(function selfinvoking(...a) {
      console.log(...a);
      
})(10,20,30,40,50);
