const factToday = "today";

const dataFacts = async (fact) => {
    let apiFacts = `https://uselessfacts.jsph.pl/api/v2/facts/${fact}`;
    const displayFact = document.getElementById("displayData");
    fetch(apiFacts)
    .then((response) => response.json())
    .then((data) => displayFact.textContent = data.text)
            
}

dataFacts(factToday);

export {dataFacts}

