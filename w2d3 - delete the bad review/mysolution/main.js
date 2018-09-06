"use strict"

var reviews = document.querySelector("ul");

function removeBadReviews(arr) {
    var spans = arr.querySelectorAll("span");
    console.log(spans);
    spans.forEach(e => {
        var string = e.textContent;
        var num = parseInt(string, 10);
        if (num <= 5) {
            console.log(num + " ");
            e.parentElement.remove();
        }
    });
}

removeBadReviews(reviews);
