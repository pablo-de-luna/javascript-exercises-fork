const palindromes = function (string) {
    const filteredStr = string
        .toLowerCase()
        .split("")
        .filter((item) => item.match(/[a-z0-9]/i))
        .join("");
    const reversedStr = filteredStr.split("").reverse().join("");
    return filteredStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
