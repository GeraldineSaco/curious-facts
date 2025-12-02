const factRandom = "random";
const factToday = "today";

const dataFacts = async (fact) => {
    let apiFacts = `https://uselessfacts.jsph.pl/api/v2/facts/${fact}`;
    fetch(apiFacts)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

dataFacts(factToday);

