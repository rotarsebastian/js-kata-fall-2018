"use strict"

const myDiv = document.querySelector(".myDiv");
myDiv.dataset.last = '';

setInterval(() => {
    changeColor(myDiv);
}, 1000);

function changeColor(elem) {
    let color = getRandomColor();
    while (color === elem.dataset.last) {
        color = getRandomColor();
    }
    elem.dataset.last = color;
    elem.style.backgroundColor = color;
}
function getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
}





