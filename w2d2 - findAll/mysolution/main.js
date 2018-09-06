"use strict";

var animals = ["dog", "cat", "horse", "cat", "mouse", "dog", "cat", "cat", "dog"];

function findAll(arr, search) {
    var newArray = [];
    var firstIndex = arr.indexOf(search);
    var lastIndex = arr.lastIndexOf(search);
    for (var i = firstIndex; i <= lastIndex; i++) {
        if (arr[i] === search)
            newArray.push(i);
    }
    return newArray;

}

var result = findAll(animals, "cat");
console.log(result);
