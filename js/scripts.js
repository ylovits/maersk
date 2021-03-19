// generate an array containing the numbers 1-9
const numArray = [...new Array(9).keys()].map((x) => x + 1);

// Select DOM element containing the cards
const cards = document.getElementById("cards");

// Takes an array as an argument and renders the cards
function renderContent(array) {
    cards.innerHTML = array.map(function (number) {
        return `<span class="card card-${number}">${number}</span>`;
    }).join("");
}

// Render the cards after the array is suffled
function suffle() {
    renderContent(numArray.sort(() => Math.random() - 0.5));
}

// Render the cards after the array is sorted
function sort() {
    renderContent(numArray.sort());
}

// Render the initian cards
renderContent(numArray);
