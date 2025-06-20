const sumAll = (...args) => {
    let firstNum = parseInt(Math.min(...args));
    let lastNum = parseInt(Math.max(...args));
    
    if (firstNum < 0 || lastNum < 0) {
        return 'ERROR'
    }
    
    console.log('firstNum =', firstNum,'lastNum =', lastNum);
    
    let sum = 0;
    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
