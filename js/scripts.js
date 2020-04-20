// Creación del mazo de cartas
const mazoCartas = document.getElementById("mazoCartas");
const palos = ["oro", "espada", "copa", "basto", "comodin"];
let cantidadPalo = 12;
const cantidadComodines = 2;


// Creación del mazo en baso a los palos 
function creacionMazohtml()
{ 
    for(let i = 0; i < palos.length; i++)   
    {        
        // Creación de las cartas de cada palo
        for(let b = 0; b < cantidadPalo; b++)
        {
            let carta = document.createElement("div");
            carta.setAttribute("id", palos[i]+"-"+(b+1))
            mazoCartas.appendChild(carta);
            
            // Controlar que los comodines son menor cantidad de cartas
            if(palos[i] === palos[palos.length-1])
            {
                cantidadPalo = cantidadComodines;
            }
        }
    }
}

// Escuchadores de eventos.
document.addEventListener("DOMContentLoaded", creacionMazohtml);
let aaa = mazoCartas.childNodes;
aaa.addEventListener("click", marcador);
function marcador(e)
{
    e.target.classList = "zoomOut";
}