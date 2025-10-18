const course = {
    coursename : "javascript",
    instructorname : "ABC",
    uploadedon : "github",
}

const {instructorname} = course;
console.log(instructorname);

// TODO , NPW IF I FEEL THAT THE INSTRUCTOR NAME IS VERY LARGE THEN I CAN GIVE IT A SMALLER VALUE 
// ? THE FOLLOWING SYNTAX IS LIKE THIS : 
const{instructorname : ins } = course;
console.log(ins);
