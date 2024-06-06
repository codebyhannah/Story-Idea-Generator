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
console.log("setting:");
import Setting from "./Setting.mjs"; 
let setting = new Setting;
await setting.init();
*/
/*
console.log("person:");
import Person from "./Person.mjs";
let person = new Person(15,20);
await person.init();
// include option for age range input on person?*/
/*
console.log("protagonist:");
import Protagonist from "./Protagonist.mjs";
let protag = new Protagonist(20,40);
await protag.init();
*/
/*
console.log("antagonist:");
import Antagonist from "./Antagonist.mjs";
let antag = new Antagonist(50,100);
await antag.init();
console.log(antag.name);
*/

import Plot from "./Plot.mjs";
let plot = new Plot();
await plot.init();

import Setting from "./Setting.mjs";
import Protagonist from "./Protagonist.mjs";
import Antagonist from "./Antagonist.mjs";
import getSideCharacters from "./sideCharacters.mjs";
let setting = await new Setting;
await setting.init();
console.log("setting:");
console.log(setting);
let protag = new Protagonist(20,40);
await protag.init();
console.log("protagonist:");
console.log(protag);
let antag = await new Antagonist(50,100);
await antag.init();
console.log("antagonist:");
console.log(antag);
let sideCharacters = await getSideCharacters(5);
console.log("side characters:");
console.log(sideCharacters);

let filledPlot = plot.fillInBlanks(protag, antag, sideCharacters, setting);
console.log("plot:");
console.log(filledPlot);


// get a random number of side characters between 1 and 15 for companions as an array, then list out as strings in plot.