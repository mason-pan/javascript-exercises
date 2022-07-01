const removeFromArray = function(arr) {
    let args = Array.from(arguments);
    args.splice(0, 1);
    for (i = arr.length; i >= 0; i--) { //go backward so you dont mess with indices
        if (args.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
