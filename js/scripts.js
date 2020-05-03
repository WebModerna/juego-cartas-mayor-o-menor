// Creación del mazo de cartas
const mazoCartas = document.getElementById("mazoCartas");
const palos = ["oro", "espada", "copa", "basto", "comodin"];
let cantidadPalo = 12;
const cantidadComodines = 2;
let carta;

// Escuchadores de eventos
window.addEventListener("load", creacionMazohtml);


// Creación del mazo en baso a los palos 
function creacionMazohtml()
{ 
    for(let i = 0; i < palos.length; i++)   
    {        
        // Creación de las cartas de cada palo
        for(let b = 0; b < cantidadPalo; b++)
        {
            carta = document.createElement("div");
            carta.setAttribute("class", "carta");
            carta.setAttribute("id", palos[i]+"-"+(b+1))
            mazoCartas.appendChild(carta);
            carta.addEventListener("click", borrarCarta);
            
            // Controlar que los comodines son menor cantidad de cartas
            if(palos[i] === palos[palos.length-1])
            {
                cantidadPalo = cantidadComodines;
            }
        }
    }

}

let cartasVirtuales = document.querySelectorAll(".carta");
function borrarCarta(e)
{
    e.target.classList.add("fadeOut");
    console.log(e.target);
    setTimeout(() => {
        e.target.remove();
    }, 1500);
}


/* let cadenita = prompt("Insertar palabra o frase palíndroma.");
cadenita = cadenita.toUpperCase();
function palindromo(e)
{
    let cadenaSeparada = e.split("");
    let cadenaSeparadaInvertida = cadenaSeparada.reverse();
    let cadenaUnir = "";
    for (i = 0; cadenaSeparadaInvertida.length > i; i++)
    {
        cadenaUnir = cadenaUnir + cadenaSeparadaInvertida[i];
        cadenaUnir = cadenaUnir.toUpperCase();

    }
    console.log("Cadena original: " + cadenita);
    console.log("Cadena invertida: " + cadenaUnir);

    if( e === cadenaUnir )
    {
        console.log("Felicidades! Es palíndromo.");
    }
    else
    {
        console.log("No es palíndromo.");
    }
}

palindromo(cadenita); */