fetch("https://type.fit/api/quotes")
  .then((res) => res.json())
  .then((data) => {

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    //to remove unnecessary - , type.fit
    let originalString = randomQuote.author;
    let parts = originalString.split(', type.fit');
    let resultString = parts.join("");

    //Display quotes and author
    document.getElementById("quote").innerHTML = randomQuote.text;
    document.getElementById("author").innerHTML = resultString;
  })
  .catch((error) => console.log(error));
