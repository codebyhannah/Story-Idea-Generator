import { getWord } from "./words.mjs";

export async function madlib(template) {
    template = "_noun_ is a noun. And _verb_ is a verb.";
    let split = template.split("_");
    let madlib = await Promise.all(split.map(async function(piece) {
        if (piece == "noun" || piece == "pronoun" || piece == "verb" || piece == "adjective" || piece == "adverb" || piece == "preposition" || piece == "conjunction") {
            piece = await getWord(piece);
        }
        return await piece;
    }));
    let joined = madlib.join("");
    return joined;
}