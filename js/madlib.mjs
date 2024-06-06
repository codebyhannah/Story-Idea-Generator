import getWord from "./words.mjs";
import { getRandomListItem } from "./utility.mjs";

export default async function madlibRandom(template, splitter = "_") {
    let split = template.split(splitter);
    let madlib = await Promise.all(split.map(async function(piece) {
        if (piece == "noun" || piece == "pronoun" || piece == "verb" || piece == "adjective" || piece == "adverb" || piece == "preposition" || piece == "conjunction") {
            piece = await getWord(piece);
        }
        return await piece;
    }));
    let joined = madlib.join("");
    return joined;
}

export function madlibFromList(template, list, stringToReplace, splitter = "#") {
    let split = template.split(splitter);
    let newTemp = split.map(function(piece) {
        if (piece == stringToReplace) {
            piece = getRandomListItem(list);
        }
        return piece;
    });
    let joined = newTemp.join("");
    return joined;
}