// ============================
// Task 1 - Employee Registration
// ============================

const employeeName = "Kondapaneni Sasidhar";
const employeeId = "EMP101";
const department = "Development";
let salary = 50000;
const isPermanent = true;

console.log("Employee Details");
console.log("----------------");
console.log(`Name       : ${employeeName}`);
console.log(`ID         : ${employeeId}`);
console.log(`Department : ${department}`);
console.log(`Salary     : ${salary}`);
console.log(`Permanent  : ${isPermanent}`);


// ============================
// Task 2 - Employee Skills
// ============================

const skills = ["HTML","CSS","JavaScript","React","Git","Node.js"];

console.log("\nEmployee Skills");
console.log("----------------");
console.log(`First Skill : ${skills[0]}`);
console.log(`Third Skill : ${skills[2]}`);
console.log(`Last Skill  : ${skills[skills.length - 1]}`);
console.log(`Total Skills: ${skills.length}`);


// ============================
// Task 3 - Company Object
// ============================

const company = {
    companyName: "Stackly IT",
    location: "Bangalore",
    employees: 250,
    technologies: ["HTML","CSS","JavaScript","React","Node.js"]
};

console.log("\nCompany Details");
console.log("----------------");
console.log(`Company Name      : ${company.companyName}`);
console.log(`Location          : ${company.location}`);
console.log(`Second Technology : ${company.technologies[1]}`);
console.log(`Total Technologies: ${company.technologies.length}`);


// ============================
// Task 4 - Salary Calculator
// ============================

let basicSalary = 25000;
let bonus = 10000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("\nSalary Calculator");
console.log("----------------");
console.log(`Basic Salary : ${basicSalary}`);
console.log(`Bonus        : ${bonus}`);
console.log(`Total Salary : ${totalSalary}`);
console.log(`Tax (10%)    : ${tax}`);
console.log(`Final Salary : ${finalSalary}`);


// ============================
// Task 5 - Attendance Checker
// ============================

let attendance = 92;

let examStatus =
attendance >= 75
? "Eligible for Exam"
: "Not Eligible";

console.log("\nAttendance Checker");
console.log("----------------");
console.log(`Attendance : ${attendance}%`);
console.log(`Status     : ${examStatus}`);


// ============================
// Task 6 - Login Verification
// ============================

let username = "sasidhark84";
let password = "@12345";

let loginStatus =
username === "sasidhark84" &&
password === "@12345"
? "Login Successful"
: "Invalid Credentials";

console.log("\nLogin Verification");
console.log("----------------");
console.log(loginStatus);


// ============================
// Task 7 - Product Billing
// ============================

let productName = "Laptop";
let productPrice = 35000;
let quantity = 2;

let totalBill = productPrice * quantity;

console.log("\nProduct Billing");
console.log("----------------");
console.log(`Product  : ${productName}`);
console.log(`Price    : ${productPrice}`);
console.log(`Quantity : ${quantity}`);
console.log(`Total    : ${totalBill}`);


// ============================
// Task 8 - Increment & Decrement
// ============================

let visitors = 200;

console.log("\nIncrement & Decrement");
console.log("----------------");

console.log(`Original Value : ${visitors}`);

console.log(`Pre Increment  : ${++visitors}`);
console.log(`Post Increment : ${visitors++}`);
console.log(`Current Value  : ${visitors}`);

console.log(`Pre Decrement  : ${--visitors}`);
console.log(`Post Decrement : ${visitors--}`);
console.log(`Final Value    : ${visitors}`);


// ============================
// Task 9 - Comparison Checker
// ============================

console.log("\nComparison Checker");
console.log("----------------");

console.log(10 == "10");      // true
console.log(10 === "10");     // false
console.log(20 != "20");      // false
console.log(20 !== "20");     // true
console.log(5 < 10);          // true
console.log(15 >= 20);        // false
console.log(100 <= 100);      // true


// ============================
// Task 10 - User Interaction
// ============================

let empName = prompt("Enter Employee Name:");
let empAge = prompt("Enter Employee Age:");

console.log(`Employee Name : ${empName}`);
console.log(`Employee Age  : ${empAge}`);

let joinCompany = confirm(
    "Do you want to join our company?"
);

joinCompany
? alert(`Welcome ${empName}`)
: alert("Thank You");


// ============================
// Final Challenge
// ============================

const employee = {
    name: "Kondapaneni Sasidhar",
    id: "EMP101",
    department: "Development",
    experience: 2,
    salary: 50000
};

const empSkills = ["HTML","CSS","JavaScript","React","Git","Node.js"];

let empBonus = 5000;
let empFinalSalary =
employee.salary + empBonus;

let empAttendance = 95;

let attendanceResult =
empAttendance >= 75
? "Eligible"
: "Not Eligible";

let user = "sasidhark84";
let pass = "@12345";

let loginResult =
user === "sasidhark84" &&
pass === "@12345"
? "Success"
: "Failed";

console.log("\n==============================");
console.log("      EMPLOYEE PORTAL");
console.log("==============================");
console.log(`Employee Name : ${employee.name}`);
console.log(`Employee ID   : ${employee.id}`);
console.log(`Department    : ${employee.department}`);
console.log(`Experience    : ${employee.experience} Years`);
console.log(`Salary        : ₹${employee.salary}`);
console.log(`Bonus         : ₹${empBonus}`);
console.log(`Final Salary  : ₹${empFinalSalary}`);
console.log(`Skills        : ${empSkills.join(", ")}`);
console.log(`Attendance    : ${empAttendance}%`);
console.log(`Exam Status   : ${attendanceResult}`);
console.log(`Login Status  : ${loginResult}`);
console.log(`Company       : ${company.companyName}`);
console.log(`Location      : ${company.location}`);
console.log("==============================");