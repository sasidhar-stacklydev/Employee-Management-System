// ============================
// BONUS TASK - Student Report Card
// ============================

const student = {
    name: "Sasidhar",
    rollNo: "ST101",
    course: "JavaScript"
};

let htmlMarks = 85;
let cssMarks = 90;
let jsMarks = 95;

let totalMarks = htmlMarks + cssMarks + jsMarks;
let averageMarks = totalMarks / 3;

let result =
averageMarks >= 35
? "Pass"
: "Fail";

const subjects = ["HTML", "CSS", "JavaScript"];

console.log("\n==============================");
console.log("    STUDENT REPORT CARD");
console.log("==============================");

console.log(`Student Name : ${student.name}`);
console.log(`Roll Number  : ${student.rollNo}`);
console.log(`Course       : ${student.course}`);

console.log(`Subjects     : ${subjects.join(", ")}`);

console.log(`HTML Marks   : ${htmlMarks}`);
console.log(`CSS Marks    : ${cssMarks}`);
console.log(`JS Marks     : ${jsMarks}`);

console.log(`Total Marks  : ${totalMarks}`);
console.log(`Average      : ${averageMarks}`);

console.log(`Result       : ${result}`);

console.log("==============================");

let studentName = prompt("Enter Student Name:");

let viewResult = confirm(
    "Do you want to view your result?"
);

viewResult
? alert(`Welcome ${studentName}, Result: ${result}`)
: alert("Thank You");