function fecthNorrisQuote() {
  const url = "https://api.chucknorris.io/jokes/random";

  axios
    .get(url)
    .then(function (res) {
      return res.data;
    })
    .then(function (quote) {
      const norrisQuote = `
            <p>${quote.value}</p>
            <img src="${quote.icon_url}"></img>
            `;
      document.querySelector(".content").innerHTML = norrisQuote;
    });
}

fecthNorrisQuote();
