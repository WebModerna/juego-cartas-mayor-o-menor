// Creación del mazo de cartas
const mazoCartas = document.getElementById("mazoCartas");
const palos = ["oro", "espada", "copa", "basto", "comodin"];
let cantidadPalo = 12;
const cantidadComodines = 2;
function creacionMazohtml()
{ 
    // Creación del mazo en baso a los palos 
    for(let i = 0; i < palos.length; i++)   
    {
        // carta.setAttribute("id", palos[i]);
        // mazoCartas.appendChild(carta);
        // carta.innerText = palos[i];
        
        // Creación de las cartas de cada palo
        for(let b = 0; b < cantidadPalo; b++)
        {
            let carta = document.createElement("div");
            carta.setAttribute("id", palos[i]+"-"+(b+1))
            mazoCartas.appendChild(carta);
            carta.innerText = palos[i] + " - " + (b+1);
            console.log(carta);
            
            // Los comodines
            if(palos[i] === palos[palos.length-1])
            {
                cantidadPalo = cantidadComodines;
            }
        }
    }
}

// Escuchadores de eventos.
document.addEventListener("DOMContentLoaded", creacionMazohtml);