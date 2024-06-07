import Person from "./Person.mjs";

export default async function getSideCharacters(amount, randomizeFn) {
    let sideCharacters = [];
    do {
        let person = new sideCharacter(randomizeFn);
        await person.init();
        sideCharacters.push(person);
        amount--;
    } while (amount > 0);
    return sideCharacters;
}

export class sideCharacter extends Person {
    getDataForDisplay() {
        let data = super.getDataForDisplay();
        data.title = "Side Character";
        return data;
    }
}