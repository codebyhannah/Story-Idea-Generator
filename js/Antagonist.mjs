import { getRandomListItem, getRandomNumber, getJson } from "./utility.mjs";
import Person from "./Person.mjs";
import madlibRandom, { madlibFromList } from "./madlib.mjs";


export default class Antagonist extends Person {
    constructor(ageMin = 1, ageMax = 100) {
        super(ageMin, ageMax);
        this.codeName;
        this.motivation;
        this.organization;
    }
    async init() {
        await super.init();
        let lists = await getJson("../json/word-lists.json");
        
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

        this.logAntag();
    }

    logAntag() {
        console.log(this.codeName);
        console.log(this.motivation);
        console.log(this.organization);
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
            let name = super.personName;
            let namePartNum = getRandomNumber(1,3);
            let nameParts = [];
            if (namePartNum == 1) {
                nameParts.push(name);
            } else {
                nameParts = name.split(" ");
            }
            // add name
            codeNameTemplate = madlibFromList(codeNameTemplate,nameParts, "name")
        }
        let codeName = await madlibRandom(codeNameTemplate);
        return codeName;
    }
}