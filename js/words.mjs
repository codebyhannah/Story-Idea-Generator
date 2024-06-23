async function getRandomWordByPartOfSpeech(part) {
    // Available parts of speech include noun, pronoun, verb, adjective, adverb, preposition, and conjunction
    let res = "";
        let partOfSpeech = part.toLowerCase();
        const url = `https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=${partOfSpeech}&random=true`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': placeholder,
                'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            res = JSON.parse(result);
        } catch (error) {
            console.error(error);
        }
    return res.word;
}

export default async function getWord(part) {
    return getRandomWordByPartOfSpeech(part);
}