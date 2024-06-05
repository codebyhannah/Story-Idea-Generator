export async function getWord(part) {
    // Available parts of speech include noun, pronoun, verb, adjective, adverb, preposition, and conjunction
    let res = "";
    /*do {*/
        let partOfSpeech = part.toLowerCase();
        const url = `https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=${partOfSpeech}&random=true`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '00adfbacf5msh9ed8e7600b998dap14ec10jsnc00c8154e026',
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