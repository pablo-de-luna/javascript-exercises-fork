const removeFromArray = function(arr, ...items) {
    // for (let i = 0; i < items.length; i++) {
        if (arr.some(elem => elem === items[i])) {
            arr.splice(i, 1);
            items.shift();
        }
    // }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
