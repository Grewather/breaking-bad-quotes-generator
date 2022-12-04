const siteApi = "https://api.breakingbadquotes.xyz/v1/quotes";
let quoteTxt = document.querySelector("#quoteTxt");
let quoteAuthor = document.querySelector("#quoteAuthor");
let loaderDiv = document.querySelector(".loader");
let containerDiv = document.querySelector(".container");
let regenBtn = document.querySelector(".regenerateButton");

let requestToApi = () => {
  fetch(siteApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      loaderDiv.classList.remove("active");
      containerDiv.classList.add("active");
      quoteTxt.innerHTML = data[0].quote;
      quoteAuthor.innerHTML = data[0].author;
    });
};

window.onload = () => {
  requestToApi();
};

regenBtn.addEventListener("click", () => {
  requestToApi();
});
