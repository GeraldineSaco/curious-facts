import {showFactRandom, showFactToday} from "./script.js"

const goToday = document.getElementById("ctrlToday");
const goRandom = document.getElementById("ctrlRandom");
const addFavorites = document.getElementById("ctrlAddFavorite");

goToday.addEventListener("click", showFactToday);
goRandom.addEventListener("click", showFactRandom);