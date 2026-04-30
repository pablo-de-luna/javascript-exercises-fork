// MY SOLUTION
// const removeFromArray = function(arr, ...args) {
//   for (let arg of args) {
//     for (let i = arr.length; i >= 0; i--) {
//       if (arr[i] === arg) {
//         arr.splice(i, 1);
//       }
//     }
//   }

//   return arr;
// };

// A BETTER WAY
const removeFromArray = function (arr, ...args) {
  return arr.filter(elem => !args.includes(elem))
}

// Do not edit below this line
module.exports = removeFromArray;
