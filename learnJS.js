
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = '';
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store" + " " + myAdverb ;
    
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("after:" + JSON.stringify(testArr));

