"use strict"

init();
setInterval(init, 10000);


function init() {
    fetch("https://kea-alt-del.dk/kata-distortion/").then(data => data.json()).then(showData);
}

function showData(data) {
    updateBar(data.inQueue);
    createLi(data.inQueue);
}

function createLi(value) {
    const li = document.createElement("li");
    li.textContent = value;
    document.querySelector("ul").appendChild(li);
}

function updateBar(value) {
    document.querySelector(".bar").style.height = `${value * 10}px`;
}
