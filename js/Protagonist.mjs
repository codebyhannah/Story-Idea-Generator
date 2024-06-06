import { getRandomListItem, getJson } from "./utility.mjs";
import Person from "./Person.mjs";

export default class Protagonist extends Person {
    constructor(ageMin = 1, ageMax = 100) {
        super(ageMin, ageMax);
        this.faveColor;
        this.likes = [];
        this.dislikes = [];
        //this.name = super.personName;
    }
    async init() {
        await super.init();
        
        let lists = await getJson("../json/word-lists.json");
        
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
}