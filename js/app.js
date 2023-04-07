const quoteContainer = document.querySelector(".quoteContainer");
const quoteBtn = document.querySelector(".quoteBtn");

let quotes = "";
let quote = "";

const url = "https://type.fit/api/quotes";

loadEventListeners();
function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    try {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          quotes = data;
          getRandomQuote();
        });
    } catch (error) {
      console.log(error);
    }
  });

  quoteBtn.addEventListener("click", () => {
    getRandomQuote();
  });
}

function getRandomQuote() {
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  loadQuote();
}

function loadQuote() {
  cleanHTML();
  const item = document.createElement("div");
  item.innerHTML = `
        <p class='quote__text'>${quote.text}</p>
        <p class='quote__author'>author: ${quote.author}</p>
    `;
  quoteContainer.appendChild(item);
}

function cleanHTML() {
  while (quoteContainer.hasChildNodes()) {
    quoteContainer.removeChild(quoteContainer.firstChild);
  }
}
