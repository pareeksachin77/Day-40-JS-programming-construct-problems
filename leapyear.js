// program to check leap year
function checkLeapYear() {
    let year = prompt("Enter a year:");
    console.log(year);
//three conditions to find out the leap year
if ((year % 4==0) && (year % 100!=0) || (year % 400==0)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}
 
}

// take input


