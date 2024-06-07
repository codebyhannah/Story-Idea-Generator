import { renderWithTemplate } from "./utility.mjs";

function storyPartCardTemplate(storyPartData) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h2 class="title">${storyPartData.title}</h2>
        <div class="details">${storyPartData.details}</div>
        <hr>
        <button class="storyPartRandomize">Randomize</button>`;
    return card;
}

export default class storyPartCard {
    constructor(storyPartData, containerElem = document.querySelector(".storyElements")) {
        this.storyPartData = storyPartData;
        this.containerElem = containerElem;
    }
    renderStoryPartCard() {
        let card = renderWithTemplate(storyPartCardTemplate(this.storyPartData), this.containerElem);
        // Makes card animation occur on mouseoff, but not when page loads.
        card.addEventListener("mouseover",(e => {
            card.classList.add("was-hovered");
        }));
        let button = card.querySelector(".storyPartRandomize");
        button.addEventListener("mouseover",(e => {
            button.classList.add("was-hovered");
        }));
    }
}