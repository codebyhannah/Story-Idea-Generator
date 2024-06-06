import getName from "./names.mjs";
import { getRandomListItem, getRandomNumber, getJson } from "./utility.mjs";

export default class Person {
    constructor(ageMin = 1, ageMax = 100) {
        this.name;
        this.age = getRandomNumber(ageMin, ageMax);
        this.gender;
        this.eyeColor;
        this.hairColor;
        this.alignment;
    }
    async init() {
        this.name = await getName();
        let lists = await getJson("../json/word-lists.json");

        let gendersList = lists.genders;
        this.gender = getRandomListItem(gendersList);

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
        this.logPerson();
    }

    get personName() {
        return this.name;
    }

    logPerson() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
        console.log(this.eyeColor);
        console.log(this.hairColor);
        console.log(this.alignment);
    }
}