let deck_id = "";

axios
  .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((result) => {
    getDeckID(result);
  })
  .catch((err) => {
    console.log(err);
  });

function getDeckID(result) {
  deck_id = result.data.deck_id;
}

document.getElementById("card_button").addEventListener("click", drawACard);

function drawACard() {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    .then((result) => {
      imgURL = result.data.cards[0].image;
      div = document.getElementById("card_div");
      image = document.createElement("img");
      image.setAttribute("class", "imageCard");
      image.setAttribute("src", `${imgURL}`);
      div.appendChild(image);
    });
}
