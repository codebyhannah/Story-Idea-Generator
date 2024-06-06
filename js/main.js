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
console.log(await madlib("I have the _adjective_ _noun_."));*/
/*
import Setting from "./Setting.mjs"; 
let setting = new Setting;
setting.init();*/

/*import Person from "./Person.mjs";
let person = new Person(15,20);
person.init();
// include option for age range input on person?*/
/*
import Protagonist from "./Protagonist.mjs";
let protag = new Protagonist(20,40);
protag.init();*/
/*
import Antagonist from "./Antagonist.mjs";
let antag = new Antagonist(50,100);
antag.init();*/