import madlibRandom, { madlibFromList } from "./madlib.mjs";
import { getJson, getRandomListItem } from "./utility.mjs";

export default class Setting {
    constructor() {
        this.setting;
    }
    async init() {
        let lists = await getJson("../json/word-lists.json");
        let placeWords = lists.placeWords;
        let templates = lists.placeTemplates;
        let template = getRandomListItem(templates);
        let joined = madlibFromList(template, placeWords, "place");
        let setting = await madlibRandom(joined);
        this.setting = setting;
        this.logSetting()
    }
    logSetting() {
        console.log(this.setting);
    }
}