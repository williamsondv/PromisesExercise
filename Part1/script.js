let fourNumberFacts = [];

for (let i = 0; i < 4; i++) {
  fourNumberFacts.push(axios.get(`http://numbersapi.com/7/trivia?json`));
}

Promise.all(fourNumberFacts)
  .then((result) => {
    populateFactList(result);
  })
  .catch((err) => console.log(err));

function populateFactList(result) {
  const ul = document.getElementById("results_ul");
  for (let i = 0; i < 4; i++) {
    let li = document.createElement("li");
    li.innerHTML += `${result[i].data.text}`;
    ul.appendChild(li);
  }
}
