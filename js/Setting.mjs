import madlibRandom, { madlibFromList } from "./madlib.mjs";
import { getJson, getRandomListItem } from "./utility.mjs";

let wordListsUrl = "https://github.com/codebyhannah/Story-Idea-Generator/blob/main/json/word-lists.json";

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
}