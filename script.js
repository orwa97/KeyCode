"use strict";
//Select elements
const startingCover = document.querySelector(".cover");
const displayKeyCode = document.querySelector(".display-big");
const eventKey = document.querySelector(".event--key");
const eventLocationParent = document.querySelector(".event--location");
const eventLocation = eventLocationParent.children[0];
const eventLocationSpecifi = eventLocationParent.children[1];
const eventWhich = document.querySelector(".event--which");
const eventCode = document.querySelector(".event--code");
const boxes = document.querySelector(".boxes");
const keyLocations = [
  "General keys",
  "Left-side modifier keys",
  "Right-side modifier keys",
  "Numpad",
];

//Starting conditons
startingCover.classList.remove("hidden");

// Getting the clicked key info
const key = function () {
  document.addEventListener("keydown", function (clickedKey) {
    //Press any key to disply the JavaScript event keycode
    if (clickedKey.isTrusted) {
      startingCover.classList.add("hidden");
    }
    //Displaying the clicked key info
    displayKeyCode.textContent = clickedKey.keyCode;
    eventKey.textContent = clickedKey.key;
    eventLocation.textContent = clickedKey.location;
    eventLocationSpecifi.textContent = `(${keyLocations[clickedKey.location]})`;
    eventWhich.textContent = clickedKey.which;
    eventCode.textContent = clickedKey.code;
  });
};
key();

//Copy the JavaScript event keycode to the clipboard
// by clicking on the event box
// for (let i = 0; i < boxes.children.length; i++) {
//   boxes.children[i].addEventListener("click", function () {
//     let copyText = boxes.children[i].textContent;
//     console.log("clicked on box", copyText);
//     document.execCommand("Copy");
//   });
// }
