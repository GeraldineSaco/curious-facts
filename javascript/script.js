import {dataFacts} from "./data.js"

const btnToday = document.getElementById("btNavToday");
const btnRandom = document.getElementById("btNavRandom");
const btnFavorites = document.getElementById("btNavFavorites");

const factSection = document.getElementById("sectionFacts");
const favoritesSection = document.getElementById("sectionFavorites");

function displayInitial(){
    factSection.classList.remove("hidden");
    favoritesSection.classList.add("hidden");
}

function displayFavorites(){
    factSection.classList.add("hidden");
    favoritesSection.classList.remove("hidden");
    //Aquí se llamará la función para listar los favoritos;
}

displayInitial();

const showFactToday = () => {
    const factToday = "today";
    dataFacts(factToday);
    displayInitial();
}

const showFactRandom = () => {
    displayInitial();
    const factRandom = "random";
    dataFacts(factRandom);
}

const showListFavorites = () => displayFavorites();


btnToday.addEventListener("click", showFactToday);
btnRandom.addEventListener("click", showFactRandom);
btnFavorites.addEventListener("click", showListFavorites);