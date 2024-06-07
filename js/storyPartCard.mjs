import { renderWithTemplate } from "./utility.mjs";

function storyPartCardTemplate(storyPartData) {
    let card = document.createElement("div");
    card.classList.add("card");
    let specifier = `${storyPartData.title.toLowerCase().replace(" ", "-")}-card`;
    card.classList.add(specifier);
    card.innerHTML = `<h2 class="title">${storyPartData.title}</h2>
        <div class="details">${storyPartData.details}</div>
        <hr>
        <button class="storyPartRandomize">Randomize</button>`;
    card.querySelector(".storyPartRandomize").setAttribute("data-id", specifier);
    return card;
}

export default class storyPartCard {
    constructor(storyPartData, randomizeFn, containerElem = document.querySelector(".storyElements")) {
        this.storyPartData = storyPartData;
        this.containerElem = containerElem;
        this.randomizeFn  = randomizeFn;
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
        button.addEventListener("click", this.randomizeFn);
    }
}