function storyElementCardTemplate(storyElement) {
    return `<div class="story-elements">
        <div class="card">
            <h2>${storyElement}</h2>
            <p>${details}</p>
            <hr>
            <button>Randomize</button>
        </div>
    </div>`;
}