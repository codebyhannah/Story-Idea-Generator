import Setting from "./Setting.mjs";
import Protagonist from "./Protagonist.mjs";
import Antagonist from "./Antagonist.mjs";
import getSideCharacters from "./sideCharacters.mjs";
import { getRandomNumber } from "./utility.mjs";
import Plot from "./Plot.mjs";

let randomizeFn;

async function displayStoryIdea() {

    randomizeFn = (() => {
        document.querySelector(".storyElements").innerHTML = "";
        displayStoryIdea();
    });
    
    let plot = await new Plot(randomizeFn);
    await plot.init();

    let setting = await new Setting(randomizeFn);
    await setting.init();

    let protag = new Protagonist(randomizeFn);
    await protag.init();

    let antag = await new Antagonist(randomizeFn);
    await antag.init();

    let amount = getRandomNumber(1,5);
    let sideCharacters = await getSideCharacters(amount, randomizeFn);

    plot.fillInBlanks(protag, antag, sideCharacters, setting);

    plot.DisplayCard();
    setting.DisplayCard();
    protag.DisplayCard();
    antag.DisplayCard();

    let cardHolder = document.querySelector(".storyElements");
    let sides = document.createElement("div");
    sides.classList.add("sideCharacters");
    cardHolder.appendChild(sides);

    sideCharacters.forEach(character => {
        character.DisplayCard(sides);
    });
    
}

displayStoryIdea();