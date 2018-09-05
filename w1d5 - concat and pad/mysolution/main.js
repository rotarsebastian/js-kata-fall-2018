"use strict"

const string1 = "image####.png";
const searchFor = "#";

function myFunction(text, num) {
    const index = text.indexOf(searchFor);
    var numString = num.toString();

    if (numString.length === 1) {
        numString = numString.padStart(2, "0");
    }

    var newText = text.replace(searchFor, numString);
    return newText;
}

function myFunction1(text, num) {
    const index = text.indexOf(searchFor);
    const lastIndex = text.lastIndexOf(searchFor);
    var difference = lastIndex - index;

    var numString = num.toString();

    var newSearch = searchFor;

    for (var i = 1; i <= difference; i++) {


        numString = "0" + numString;

    }

    for (var i = 1; i <= difference; i++) {
        newSearch = newSearch + "#";
    }


    var newText = text.replace(newSearch, numString);
    return newText;
}

var show = myFunction1(string1, 44);

console.log(show);

