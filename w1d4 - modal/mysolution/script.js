"use strict";

let openModal = document.querySelector(".openModal");
let closeModal = document.querySelector("#closebutton");
let modal = document.querySelector(".modal");

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);

function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  let modal = document.querySelector(".modal");
  if (evt.keyCode == 27) {
    modal.style.display = "none";
  }
};
