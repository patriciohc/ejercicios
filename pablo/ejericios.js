function allLongestStrings(inputArray) {
    var maxLength = 0;
    var maxStrs = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (maxLength < inputArray[i].length) {
            maxLength = inputArray[i].length;
            maxStrs = [inputArray[i]];
        } else if (maxStrs == inputArray[i].length) {
            maxStrs.push(inputArray[i]);
        }
    }
    return maxStrs;
}

allLongestStrings(["aba", 
"aa", 
"ad", 
"vcd", 
"aba"])