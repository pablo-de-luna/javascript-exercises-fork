// const removeFromArray = (array, ...args) => {
//     let newArray = [];
//     array.forEach(item => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// }

const removeFromArray = (array, ...args) => {
    return array.filter(item => !args.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
