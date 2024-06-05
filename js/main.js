/*import { getRandomListItem } from "./utility.mjs";
console.log(getRandomListItem(["a","b","c","d"]));*/


// Makes card animation occur on mouseoff, but not when page loads.
let card = document.querySelector(".card");
let cardButton = document.querySelector(".card button");
/* add event listeners to each card during display function, like for the removal buttons in shopping cart */
card.addEventListener("mouseover",(e => {
    card.classList.add("was-hovered");
}));
cardButton.addEventListener("mouseover",(e => {
    cardButton.classList.add("was-hovered");
}));


/*
import { getName } from "./names.mjs";
let d = await getName("female", "common");
console.log(d);
*/

/*
import { getWord } from "./words.mjs";
let w = await getWord("noun");
console.log(w);
*/
/*
import { madlib } from "./madlib.mjs";
console.log(await madlib());*/