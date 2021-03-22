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
const boxesText = document.querySelectorAll(".box__display-feild");
const copy1Notify = document.querySelector(".copied--1");
const copy2Notify = document.querySelector(".copied--2");
const headache = document.querySelector(".headache");
const orwa = document.querySelector(".orwa");
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
for (let i = 0; i < boxes.children.length; i++) {
  boxes.children[i].addEventListener("click", function () {
    const el = document.createElement("textarea");
    let str;
    for (let e = 0; e < boxesText.length; e++) {
      str = boxesText[i].textContent;
      el.value = str;
    }
    console.log(str);
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    //Copied to clipborad's functionality
    if (!copy1Notify.classList.contains("clicked")) {
      copy2Notify.classList.remove("clicked");
      copy1Notify.classList.add("clicked");
    } else {
      copy1Notify.classList.remove("clicked");
      copy2Notify.classList.add("clicked");
    }
  });
}

orwa.addEventListener("click", function () {
  headache.classList.toggle("clickedOnOrwa");
});
