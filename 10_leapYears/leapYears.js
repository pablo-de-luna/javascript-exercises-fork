/*
If the year is divisible by four, it's a leap year.
But if the year can be divided by 100 as well as four, it's not a leap year.
However, if the year is divisible by 400, it is a leap year. 
*/

const leapYears = function(year) {
    if (year % 400 === 0) return true;
    if ((year % 4 === 0) && (year % 100 === 0)) return false;
    if (year % 4 === 0) return true;
    return false
};

// Do not edit below this line
module.exports = leapYears;
