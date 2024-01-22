const quote = document.getElementById("quote");
const authorName = document.getElementById("author");
const quoteBtn = document.getElementById("quoteBtn");
const tweet = document.getElementById("tweet");

const apiUrl = "https://api.quotable.io/random";
let data;
async function getQuote(url) {
    const res = await fetch(url)
    data = await res.json()
    // console.log(data);
    quote.innerHTML = data.content
    authorName.innerHTML = data.author
}

function tweeter() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} ---- by ${authorName.innerHTML}`, "Twiter Window", "width=600px , height=300")
}

quoteBtn.addEventListener("click", () => getQuote(apiUrl))
tweet.addEventListener("click", tweeter)
