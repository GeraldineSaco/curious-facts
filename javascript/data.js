const factToday = "today";
let displayedFactData = null;

const displayFact = document.getElementById("displayData");

const dataFacts = async (fact) => {
    let apiFacts = `https://uselessfacts.jsph.pl/api/v2/facts/${fact}`;     
    fetch(apiFacts)
    .then(response => response.json())
    .then(data => {
        displayedFactData = data;
        displayFact.textContent = data.text;
    }); 
}

dataFacts(factToday);

export {dataFacts, displayedFactData}