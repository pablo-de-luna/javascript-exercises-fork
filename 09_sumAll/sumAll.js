const sumAll = (...args) => {
    if (args.some(item => 
        isNaN(item) 
        || item < 0
        || !Number.isInteger(item)
    )) {
        return 'ERROR';
    }
    
    let firstNum = parseInt(Math.min(...args));
    let lastNum = parseInt(Math.max(...args));
    let sum = 0;
    
    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
