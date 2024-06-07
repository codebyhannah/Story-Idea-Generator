import madlibRandom, { madlibFromList } from "./madlib.mjs";
import { getJson, getRandomListItem } from "./utility.mjs";
import storyPartCard from "./storyPartCard.mjs";

let wordListsUrl = "https://codebyhannah.github.io/Story-Idea-Generator/json/word-lists.json"

export default class Setting {
    constructor() {
        this.setting;
    }
    async init() {
        let lists = await getJson(wordListsUrl);
        let placeWords = lists.placeWords;
        let templates = lists.placeTemplates;
        let template = getRandomListItem(templates);
        let joined = madlibFromList(template, placeWords, "place");
        let setting = await madlibRandom(joined);
        this.setting = setting;
    }
    getDataForDisplay() {
        let htmlString = `<p><span class="label">Setting Name:</span> ${this.setting}</p>`;

        let data = {
            title: "Setting", 
            details: htmlString
        };
        return data;
    }
    DisplayCard() {
        let data = this.getDataForDisplay();
        let card = new storyPartCard(data);
        card.renderStoryPartCard();
    }
}