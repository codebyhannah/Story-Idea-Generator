import { getRandomListItem, getRandomNumber, getJson } from "./utility.mjs";
import Person from "./Person.mjs";
import madlibRandom, { madlibFromList } from "./madlib.mjs";

let wordListsUrl = "https://codebyhannah.github.io/Story-Idea-Generator/json/word-lists.json"

export default class Antagonist extends Person {
    constructor(ageMin = 1, ageMax = 100) {
        super(ageMin, ageMax);
        this.codeName;
        this.motivation;
        this.organization;
    }
    async init() {
        await super.init();
        let lists = await getJson(wordListsUrl);
        
        let motivationsList = lists.motivations;
        this.motivation = getRandomListItem(motivationsList);
        
        let codeNameNum = getRandomNumber(1,2);
        if (codeNameNum == 1) {
            this.codeName = "none";
        } else {
            this.codeName = await this.createCodeName(lists);
        }

        let organizationNum = getRandomNumber(1,2);
        if (organizationNum == 1) {
            this.organization = "none";
        } else {
            this.organization = await this.createOrganization(lists);
        }
    }

    async createOrganization(lists) {
        let organizationTemplate = getRandomListItem(lists.organizationTemplates);
        let organizationName = await madlibRandom(organizationTemplate);
        let organizationType = getRandomListItem(lists.organizations)
        let organizationAlignment = getRandomListItem(lists.alignments);
        return {
            name: organizationName,
            type: organizationType,
            alignment: organizationAlignment
        }
    }

    async createCodeName(lists) {
        let codeNameTemplatesList = lists.codeNameTemplates;
        let codeNameTemplate = getRandomListItem(codeNameTemplatesList);

        if (codeNameTemplate.includes("#")) {
            let namePartNum = getRandomNumber(1,3);
            let nameParts = [];
            if (namePartNum == 1) {
                nameParts.push(this.name);
            } else {
                nameParts = this.name.split(" ");
            }
            // add name
            codeNameTemplate = madlibFromList(codeNameTemplate,nameParts, "name")
        }
        let codeName = await madlibRandom(codeNameTemplate);
        return codeName;
    }

    getDataForDisplay() {
        // Overrides Person.getDataForDisplay, can just call super.DisplayCard() and the data will be correct.
        let organization;
        if (this.organization == "none") {
            organization = "None";
        } else {
            organization = `<ul>
            <li><span class="sub-label">Name:</span> ${this.organization.name}</li>
            <li><span class="sub-label">Type:</span> ${this.organization.type}</li>
            <li><span class="sub-label">Alignment:</span> ${this.organization.alignment}</li>
            </ul>`
        }

        let data = super.getDataForDisplay();
        data.title = "Antagonist";
        data.details += `<p><span class="label">Code Name:</span> ${this.codeName}</p>
        <p><span class="label">Motivation:</span> ${this.motivation}</p>
        <p><span class="label">Organization:</span> ${organization}</p>`;
        return data;
    }
    DisplayCard() {
        super.DisplayCard();
    }
}