const reverseString = function(string) {
    let splitString = string.split("");
    let newArray = [];
    let newString = "";
    for (i = string.length - 1; i >=0; i--) {
        newArray.push(splitString[i]);
    }
    for (i = 0; i < string.length; i++) {
        newString = newString + newArray[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
