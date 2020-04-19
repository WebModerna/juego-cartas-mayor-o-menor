// Creación del mazo de cartas
const mazoHtml = document.getElementById("mazoCartas");
const palos = ["oro", "espada", "copa", "basto", "comodines"];
function creacionMazohtml()
{
    let carta = document.createElement("div");
    carta.setAttribute("id", "oro");
    carta.innerText = "Oro";
    mazoHtml.appendChild(carta);
}

// Escuchadores de eventos.
document.addEventListener("DOMContentLoaded", creacionMazohtml);