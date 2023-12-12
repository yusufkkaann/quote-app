const api_url = "https://api.quotable.io/random";

const textBox = document.querySelector("#text-box");
const author = document.querySelector("#author");

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  textBox.innerHTML = data.content;
  author.innerHTML = data.author;
  console.log(data);
}
function tweetQuote() {
  window.open(
    `https://twitter.com/intent/tweet?text=${textBox.innerHTML} ---- by ${author.innerHTML}`,
    "Tweet Window",
    "width=600,height=300"
  );
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "tr" },
    "google_translate_element"
  );
}

getQuote(api_url);
