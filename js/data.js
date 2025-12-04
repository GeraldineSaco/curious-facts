let displayedFactData = null;

const dataFacts = async (fact) => {
    const displayFact = document.getElementById("displayData");
    let apiFacts = `https://uselessfacts.jsph.pl/api/v2/facts/${fact}`;     
    return fetch(apiFacts)
            .then(response => response.json())
            .then(data => {
                displayedFactData = data;
                displayFact.textContent = data.text;
                return data;
            }); 
}

dataFacts("today");

export {dataFacts, displayedFactData};