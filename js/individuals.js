import Setting from "./Setting.mjs";
import Protagonist from "./Protagonist.mjs";
import Antagonist from "./Antagonist.mjs";
import getSideCharacters from "./sideCharacters.mjs";
import { getParam, getRandomNumber } from "./utility.mjs";
import Plot from "./Plot.mjs";

let randomizeFn;

async function setUp() {
    let type = getParam("type");
    let id;
    if (type == "protagonist") {
        id = "#protag-navlink";
        randomizeFn = (() => {
            document.querySelector(".storyElements").innerHTML = "";
            getProtag(randomizeFn);
        });
        getProtag(randomizeFn);
    } else if (type == "antagonist") {
        id = "#antag-navlink";
        randomizeFn = (() => {
            document.querySelector(".storyElements").innerHTML = "";
            getAntag(randomizeFn);
        });
        getAntag(randomizeFn);
    } else if (type == "sidecharacter") {
        id = "#side-char-navlink";
        randomizeFn = (() => {
            document.querySelector(".storyElements").innerHTML = "";
            getSides(randomizeFn);
        });
        getSides(randomizeFn);
    } else if (type == "setting") {
        id = "#setting-navlink";
        randomizeFn = (() => {
            document.querySelector(".storyElements").innerHTML = "";
            getSetting(randomizeFn);
        });
        getSetting(randomizeFn);
    } else if (type == "plot") {
        id = "#plot-navlink";
        randomizeFn = (() => {
            document.querySelector(".storyElements").innerHTML = "";
            getPlot(randomizeFn);
        });
        getPlot(randomizeFn);
    }
    
    let current = document.querySelector(id);
    current.classList.add("current");   
}

async function getProtag(randomizeFn) {
    let protag = new Protagonist(randomizeFn);
    await protag.init();
    protag.DisplayCard();
}

async function getAntag(randomizeFn) {
    let antag = await new Antagonist(randomizeFn);
    await antag.init();
    antag.DisplayCard();
}

async function getSides(randomizeFn) {
    let amount = getRandomNumber(1,5);
    let sideCharacters = await getSideCharacters(amount,randomizeFn);
    let cardHolder = document.querySelector(".storyElements");
    let sides = document.createElement("div");
    sides.classList.add("sideCharacters");
    cardHolder.appendChild(sides);
    sideCharacters.forEach(character => {
        character.DisplayCard(sides);
    });
}

async function getSetting(randomizeFn) {
    let setting = await new Setting(randomizeFn);
    await setting.init();
    setting.DisplayCard();
}

async function getPlot(randomizeFn) {
    let plot = await new Plot(randomizeFn);
    await plot.init();
    plot.plainPlot();
    plot.DisplayCard();
}

setUp();