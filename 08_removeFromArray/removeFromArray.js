
// ```javascript
// removeFromArray([1, 2, 3, 4], 3, 2); // should remove 3 and return [1,2,4]
// ```


const removeFromArray = function(arr, ...items) {
    let newArr = [];

    arr.forEach(element => {
        if (!items.some(item => item === element)) {
            newArr.push(element);
        }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
