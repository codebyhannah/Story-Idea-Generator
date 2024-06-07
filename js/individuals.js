import { getParam } from "./utility.mjs";
import Setting from "./Setting.mjs";
import Protagonist from "./Protagonist.mjs";
import Antagonist from "./Antagonist.mjs";
import getSideCharacters from "./sideCharacters.mjs";
import { getRandomNumber } from "./utility.mjs";
import Plot from "./Plot.mjs";

async function setUp() {
    let type = getParam("type");
    let id;
    if (type == "protagonist") {
        id = "#protag-navlink";
        getProtag();
    } else if (type == "antagonist") {
        id = "#antag-navlink";
        getAntag();
    } else if (type == "sidecharacter") {
        id = "#side-char-navlink";
        getSides();
    } else if (type == "setting") {
        id = "#setting-navlink";
        getSetting();
    } else if (type == "plot") {
        id = "#plot-navlink";
        getPlot();
    }
    
    let current = document.querySelector(id);
    current.classList.add("current");   
}

async function getProtag() {
    let protag = new Protagonist();
    await protag.init();
    protag.DisplayCard();
}

async function getAntag() {
    let antag = await new Antagonist();
    await antag.init();
    antag.DisplayCard();
}

async function getSides() {
    let amount = getRandomNumber(1,5);
    let sideCharacters = await getSideCharacters(amount);
    let cardHolder = document.querySelector(".storyElements");
    let sides = document.createElement("div");
    sides.classList.add("sideCharacters");
    cardHolder.appendChild(sides);
    sideCharacters.forEach(character => {
        character.DisplayCard(sides);
    });
}

async function getSetting() {
    let setting = await new Setting;
    await setting.init();
    setting.DisplayCard();
}

async function getPlot() {
    let plot = await new Plot();
    await plot.init();
    plot.plainPlot();
    plot.DisplayCard();
}

setUp();