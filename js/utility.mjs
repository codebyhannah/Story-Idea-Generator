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
 
export function renderWithTemplate(template,      containerElem, data, callback, clear = false) {
    if (clear) {
        containerElem.innerHtml = "";
    }
    containerElem.appendChild(template);
    if(callback) {
        callback(data);
    }
    return template;
}
    
export async function loadTemplate(path) {
    const html = await fetch(path).then(response => response.text());
    html = header;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
}
    
export async function loadHeaderFooter() {
    let headerTemplate = await loadTemplate("../partials/header.html");
    let footerTemplate = await loadTemplate("../partials/footer.html");
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");
    renderWithTemplate(headerTemplate, header);
    renderWithTemplate(footerTemplate, footer);
}