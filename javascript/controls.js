import {showFactRandom, showFactToday} from "./script.js"
import { addFavorites } from "./favorite.js";

const goToday = document.getElementById("ctrlToday");
const goRandom = document.getElementById("ctrlRandom");
const addFavorit = document.getElementById("ctrlAddFavorite");

goToday.addEventListener("click", showFactToday);
goRandom.addEventListener("click", showFactRandom);
addFavorit.addEventListener("click", addFavorites);