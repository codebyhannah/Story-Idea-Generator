import { getRandomListItem, getJson } from "./utility.mjs";

export default class Plot {
    constructor() {
        this.plot;
    }
    async init() {
        // plots derived from https://en.wikipedia.org/wiki/The_Seven_Basic_Plots

        let lists = await getJson("../json/word-lists.json");
        let templates = lists.plotTemplates;
        this.template = getRandomListItem(templates);
    }

    plainPlot() {
        let split = this.template.split("#");
        let plain = split.map(piece => {
            if (piece == "companions") {
                piece = " ";
            }
            return piece;
        });
        return plain.join("");
    }

    fillInBlanks(protag, antag, sideCharacters, setting) {
        // things which may need replacing in any given plot: #protagonist#, #the protagonist#, #antagonist#, #the antagonist#, #setting#, #companions#(which must be removed if not replaced).
        let split = this.template.split("#");
        let filled = split.map(piece => {
            if (piece == "protagonist" || piece == "the protagonist") {
                piece = protag.name;
            } else if (piece == "antagonist" || piece == "the antagonist") {
                piece = antag.name;
            } else if (piece == "setting") {
                piece = setting.setting;
            } else if (piece == "companions") {
                piece = " ";
                sideCharacters.forEach(character => {
                    if (sideCharacters.indexOf(character) == (sideCharacters.length - 1)) {
                        piece += "and " + character.name + " ";
                    } else {
                        piece += character.name + ", ";
                    }
                });
            } else {
                piece = piece;
            }
            return piece;
        });
        return filled.join("");
    }

}