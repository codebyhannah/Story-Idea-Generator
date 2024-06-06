import Person from "./Person.mjs";

export default async function getSideCharacters(amount) {
    let sideCharacters = [];
    do {
        let person = new Person();
        await person.init();
        sideCharacters.push(person);
        amount--;
    } while (amount > 0);
    return sideCharacters;
}
