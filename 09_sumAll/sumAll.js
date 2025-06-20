// const sumAll = (...args) => {
//     if (args.some(item => item < 0 || !Number.isInteger(item))) {
//         return 'ERROR';
//     }
    
//     let firstNum = parseInt(Math.min(...args));
//     let lastNum = parseInt(Math.max(...args));
//     let sum = 0;
    
//     for (let i = firstNum; i <= lastNum; i++) {
//         sum += i;
//     }
//     return sum;
// };

const sumAll = (num1, num2) => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) 
        return 'ERROR';

    let firstNum = Math.min(num1, num2);
    let lastNum = Math.max(num1, num2);
    let sum = 0;
    
    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
