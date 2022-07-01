const repeatString = function(string, num) {
    let outcome = "";
    if (num < 0) {
        outcome = "ERROR"
    } else {
        for (i = 0; i < num; i++) {
            outcome = outcome + string;
        }
    }
    return outcome;
};

// Do not edit below this line
module.exports = repeatString;
