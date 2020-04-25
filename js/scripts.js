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

const cadenaInicial = ["h", "o", "l", "a"] ;
let cadenaIvertida = cadenaInicial.reverse();
let cadenaFinal="";
for (let i = 0; i < cadenaIvertida.length; i++)
{
    cadenaFinal.includes(cadenaIvertida[i]);
}
console.log(cadenaFinal);