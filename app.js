```javascript
// ==========================================
// ASSIGNMENT #31–34
// JAVASCRIPT — DATE METHODS
// ==========================================


// Q1
var rightNow = new Date();

document.write("<h3>Question 1</h3>");
document.write("Current Date and Time: " + rightNow);


// Q2
var rightNow = new Date();

var months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

var currentMonth = rightNow.getMonth();

alert(months[currentMonth]);


// Q3
var rightNow = new Date();

var days = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
];

var currentDay = days[rightNow.getDay()];

alert(currentDay.slice(0, 3));


// Q4
var rightNow = new Date();

var day = rightNow.getDay();

if (day === 0 || day === 6) {
    alert("It's Fun day");
}


// Q5
var rightNow = new Date();

var date = rightNow.getDate();

if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}


// Q6
var rightNow = new Date();

var minutes = Math.floor(rightNow.getTime() / (1000 * 60));

document.write("<h3>Question 6</h3>");
document.write("Minutes since January 1, 1970: " + minutes);


// Q7
var rightNow = new Date();

var hours = rightNow.getHours();

if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}


// Q8
var laterDate = new Date(2020, 11, 31);

document.write("<h3>Question 8</h3>");
document.write("Later Date: " + laterDate);


// Q9
var ramadanDate = new Date("June 18, 2015");
var today = new Date();

var difference = today.getTime() - ramadanDate.getTime();

var daysPassed = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);

alert("Days passed since 1st Ramadan 2015: " + daysPassed);


// Q10
var referenceDate = new Date();
var beginningOf2015 = new Date("January 1, 2015");

var difference = referenceDate.getTime() -
                 beginningOf2015.getTime();

var seconds = Math.floor(difference / 1000);

document.write("<h3>Question 10</h3>");
document.write(
    "Seconds elapsed since January 1, 2015: " + seconds
);


// Q11
var rightNow = new Date();

var currentHours = rightNow.getHours();

rightNow.setHours(currentHours + 1);

document.write("<h3>Question 11</h3>");
document.write("Date one hour ahead: " + rightNow);


// Q12
var rightNow = new Date();

rightNow.setFullYear(
    rightNow.getFullYear() - 100
);

alert("Date 100 years back: " + rightNow);


// Q13
var age = prompt("Enter your age:");

var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

document.write("<h3>Question 13</h3>");
document.write("Your birth year is: " + birthYear);


// Q14
var customerName = prompt("Enter Customer Name:");

var units = Number(
    prompt("Enter Number of Units:")
);

var chargesPerUnit = Number(
    prompt("Enter Charges per Unit:")
);

var latePaymentSurcharge = Number(
    prompt("Enter Late Payment Surcharge:")
);

var rightNow = new Date();

var months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

var currentMonth = months[rightNow.getMonth()];

var netAmount = units * chargesPerUnit;

var grossAmount = netAmount + latePaymentSurcharge;

document.write("<hr>");
document.write("<h2>K-Electric Bill</h2>");

document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br>");
document.write(
    "Net Amount Payable (within Due Date): " +
    netAmount + "<br>"
);
document.write(
    "Late Payment Surcharge: " +
    latePaymentSurcharge + "<br>"
);
document.write(
    "Gross Amount Payable (after Due Date): " +
    grossAmount
);
```

