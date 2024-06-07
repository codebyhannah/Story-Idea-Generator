import Setting from "./Setting.mjs";
import Protagonist from "./Protagonist.mjs";
import Antagonist from "./Antagonist.mjs";
import getSideCharacters from "./sideCharacters.mjs";
import { getRandomNumber } from "./utility.mjs";
import Plot from "./Plot.mjs";

let plot = new Plot();
await plot.init();

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
let amount = getRandomNumber(1,5);
let sideCharacters = await getSideCharacters(amount);
console.log("side characters:");
console.log(sideCharacters);

let filledPlot = plot.fillInBlanks(protag, antag, sideCharacters, setting);
console.log("plot:");
console.log(filledPlot);