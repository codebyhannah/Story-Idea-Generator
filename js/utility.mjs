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
 
export function renderWithTemplate(template, containerElem, callback, clear = false) {
    if (clear) {
        containerElem.innerHtml = "";
    }
    if(callback) {
        callback(template);
    }
    else{
        containerElem.appendChild(template);
    }
    return template;
}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get(param);
    return paramValue;
  }