const dictionary = (word) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a2153b33aemshe0d6efc1e67feffp1a9466jsn3ce474911dde",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };2

  fetch(
    "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" +
      word,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      wordheading.innerHTML = response.word;
      definition.innerHTML = response.definition;
    })
    .catch((err) => console.error(err));
};

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchinput.value);
});
