export function getRandomListItem(list){
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}

export async function getJson(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// get random number in a range
export function getRandomNumber(min = 0, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}