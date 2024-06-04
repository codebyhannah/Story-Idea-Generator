import { getRandomListItem } from "./utility.mjs";

console.log(getRandomListItem(["a","b","c","d"]));





let card = document.querySelector(".card");
let cardButton = document.querySelector(".card button");

/* add event listeners to each card during display function, like for the removal buttons in shopping cart */

card.addEventListener("mouseover",(e => {
    card.classList.add("was-hovered");
}));
cardButton.addEventListener("mouseover",(e => {
    cardButton.classList.add("was-hovered");
}));

