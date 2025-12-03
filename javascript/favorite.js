import {displayedFactData} from "./data.js"
const containerFavorites = document.getElementById("diplayListFavorites");

const addFavorites = () => { 
    const favorites = JSON.parse(localStorage.getItem('uselessFactsFavorites')) || [];
    const factExists = favorites.some(fact => fact.id === displayedFactData.id);
    
    if (factExists === false){
        favorites.push(displayedFactData);
        localStorage.setItem('uselessFactsFavorites', JSON.stringify(favorites));
        alert("Hecho añadido a Favoritos");
    } else {
        alert("El hecho ya existe en Favoritos")
    }
}

export {addFavorites}