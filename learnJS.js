
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
console.log("before:" + JSON.stringify(testArr),"\n");
console.log(nextInLine(testArr, 6));
console.log("after:" + JSON.stringify(testArr),"\n");

var names = ["hole-in-one!", "eagle", "Birdie","par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if(strokes == 1) {
        return names[0];
    } else if (strokes <= par-2) {
        return names[1]
    } else if (strokes == par-1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par+1) {
        return names[4]
    } else if (strokes == par+2) {
        return names[5]
    } else if (strokes >= par+3) {
        return names[6]
    }
}

console.log(golfScore(5, 4),"\n");

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs" 
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
    var gloveBoxContents = myStorage.car.inside["glove box"]; 
    console.log(gloveBoxContents,"\n");

var collection = {
    "12548": {
        "album": "isLippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock ",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
        "1999",
        "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value == "") {
        delete collection[id][prop];
    } else if (prop == "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));