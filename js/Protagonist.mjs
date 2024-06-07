import { getRandomListItem, getJson } from "./utility.mjs";
import Person from "./Person.mjs";

let wordListsUrl = "https://codebyhannah.github.io/Story-Idea-Generator/json/word-lists.json"

export default class Protagonist extends Person {
    constructor(randomizeFn) {
        super(randomizeFn);
        this.faveColor;
        this.likes = [];
        this.dislikes = [];
    }
    async init() {
        await super.init();
        
        let lists = await getJson(wordListsUrl);
        
        let colorsList = lists.colors;
        this.faveColor = getRandomListItem(colorsList);

        let likesList = lists.likes;
        let count = 0;
        do {
            this.likes.push(getRandomListItem(likesList));
            count ++;
        } while(count != 2);
       
        let dislikesList = lists.dislikes;
        count = 0;
        do {
            this.dislikes.push(getRandomListItem(dislikesList));
            count ++;
        } while(count != 2);
    }
    getDataForDisplay() {
        // Overrides Person.getDataForDisplay, can just call super.DisplayCard() and the data will be correct.
        let data = super.getDataForDisplay();
        data.title = "Protagonist";
        data.details += `<p><span class="label">Favorite Color:</span> ${this.faveColor}</p>
        <p><span class="label">Likes:</span> ${this.likes.join(", ")}</p>
        <p><span class="label">Dislikes:</span> ${this.dislikes.join(", ")}</p>`;
        return data;
    }
    DisplayCard() {
        super.DisplayCard();
    }
}