import getName from "./names.mjs";
import { getRandomListItem, getRandomNumber, getJson } from "./utility.mjs";
import storyPartCard from "./storyPartCard.mjs";

let wordListsUrl = "https://codebyhannah.github.io/Story-Idea-Generator/json/word-lists.json"

export default class Person {
    constructor(randomizeFn, ageMin = 1, ageMax = 100) {
        this.name;
        this.age = getRandomNumber(ageMin, ageMax);
        this.gender;
        this.eyeColor;
        this.hairColor;
        this.alignment;
        this.randomizeFn = randomizeFn;
    }
    async init() {
        let lists = await getJson(wordListsUrl);

        let gendersList = lists.genders;
        this.gender = getRandomListItem(gendersList);

        this.name = await getName(this.gender);

        let eyeListNum = getRandomNumber(1,2);
        let eyeList;
        if (eyeListNum == 1) {
            eyeList = lists.eyeColors;
        }
        else {
            eyeList = lists.colors;
        }
        this.eyeColor = getRandomListItem(eyeList);

        let hairListNum = getRandomNumber(1,2);
        let hairList;
        if (hairListNum == 1) {
            hairList = lists.hairColors;
        }
        else {
            hairList = lists.colors;
        }
        this.hairColor = getRandomListItem(hairList);
        let alignmentsList = lists.alignments;
        this.alignment = getRandomListItem(alignmentsList);
    }
    getDataForDisplay() {
        let htmlString = `<p><span class="label">Name:</span> ${this.name}</p>
        <p><span class="label">Gender:</span> ${this.gender}</p>
        <p><span class="label">Age:</span> ${this.age}</p>
        <p><span class="label">Hair Color:</span> ${this.hairColor}</p>
        <p><span class="label">Eye Color:</span> ${this.eyeColor}</p>
        <p><span class="label">Moral Alignment:</span> ${this.alignment}</p>`;

        let data = {
            title: "Person", 
            details: htmlString
        };
        return data;
    }
    DisplayCard(containerElem) {
        let data = this.getDataForDisplay();
        let card = new storyPartCard(data, this.randomizeFn, containerElem);
        card.renderStoryPartCard();
    }
}