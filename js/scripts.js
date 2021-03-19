const numArray = [...new Array(9).keys()].map((x) => x + 1);

const cards = document.getElementById("cards");

function renderContent(array) {
    cards.innerHTML = array.map(function (number) {
        return `<span class="card card-${number}">${number}</span>`;
    }).join("");
}

function suffle() {
    renderContent(numArray.sort(() => Math.random() - 0.5));
}

function sort() {
    renderContent(numArray.sort());
}

renderContent(numArray);
