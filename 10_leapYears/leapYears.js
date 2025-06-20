/*
If the year is divisible by four, it's a leap year.
But if the year can be divided by 100 as well as four, it's not a leap year.
However, if the year is divisible by 400, it is a leap year. 
*/

const leapYears = function(year) {
    const isDivisibleBy4 = year % 4 === 0;
    const isDivisibleBy100 = year % 100 === 0;
    const isDivisibleBy400 = year % 400 === 0;

    if (isDivisibleBy400) return true;
    if (isDivisibleBy100) return false;
    if (isDivisibleBy4) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
