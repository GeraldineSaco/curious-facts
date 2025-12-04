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

const renderListFavorites = () => {
    containerFavorites.innerHTML = "";
    const favorites = JSON.parse(localStorage.getItem('uselessFactsFavorites')) || [];
    if (favorites.length === 0) {
        containerFavorites.innerHTML = '<h3>Aún no tienes favoritos guardados.</h3>';
    }
    let favoritePrint = "";
    favorites.forEach(fact => { 
        favoritePrint += `
            <div class="items">
                <ul type="square">
                    <li>${fact.text}</li>
                </ul>
            </div>
        `
        containerFavorites.innerHTML = favoritePrint;   
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    localStorage.removeItem('uselessFactsFavorites');
});

export {addFavorites, renderListFavorites}