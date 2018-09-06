"use strict";


function listMethods(htmlId, forWay) {
    var section = document.querySelector(htmlId);
    var listItems = section.querySelectorAll("li");
    var header = section.querySelector("h2");
    console.log(header.textContent);
    if (forWay === "classicFor") {
        for (var i = 0; i < listItems.length; i++) {
            displayElement(listItems[i]);
        }
    }
    else {
        listItems.forEach(displayElement);
    }
}

function displayElement(element) {
    console.log("• " + element.textContent);
}


//listMethods("#modify");
listMethods("#info", "classicFor");
listMethods("#info", "forEach");

listMethods("#newarray", "forEach");

// TODO: Create listMethods function