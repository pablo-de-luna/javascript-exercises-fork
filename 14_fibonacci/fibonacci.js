// fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

const fibonacci = function(arg) {
    const seqArr = [1, 1];
    
    const index = Number(arg);
    if (index === 0) return 0;
    if (index < 0) return "OOPS";

    for (let i = 2; i < index; i++) {
        seqArr.push(seqArr[seqArr.length - 1] + seqArr[i - 2])
    }

    return seqArr[seqArr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
