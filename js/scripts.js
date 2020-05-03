// Creación del mazo de cartas
const palos = ["oro", "espada", "copa", "basto", "comodin"];
let cantidadPalo = 12;
const cantidadComodines = 2;
let carta;
const cartasVirtuales = document.querySelectorAll(".carta");

// Pantallas
const presentacion = document.getElementById("presentacion");
const instrucciones = document.getElementById("instrucciones");
const mazoCartas = document.getElementById("mazoCartas");
const btnJugar = document.getElementById("jugar");
const btnSalir = document.getElementById("salir");
const resultadoProbabilidad = document.getElementById("resultadoProbabilidad");
let cartaQueSalio = document.getElementById("cartaQueSalio");
let numeroProbabilidad = document.getElementById("numeroProbabilidad");
const finJuego = document.getElementById("finJuego");

// Escuchadores de eventos
window.addEventListener("load", creacionMazohtml);
document.addEventListener("click", jugarAhora);


// Creación del mazo en base a los palos 
function creacionMazohtml()
{ 
    for(let i = 0; i < palos.length; i++)   
    {        
        // Creación de las cartas de cada palo
        for( let b = 0; b < cantidadPalo; b++ )
        {
            carta = document.createElement("div");
            carta.setAttribute("class", "carta");
            carta.setAttribute("id", palos[i]+"-"+(b+1));
            carta.setAttribute("data-numero", (b+1));
            mazoCartas.appendChild(carta);
            carta.addEventListener("click", borrarCarta);
            
            // Controlar que los comodines son menor cantidad de cartas
            if( palos[i] === palos[ palos.length - 1 ] )
            {
                cantidadPalo = cantidadComodines;
            }
        }
    }

}

// Borra las cartas del DOM cuando se le da un click y genera un cálculo de probabilidad
function borrarCarta(e)
{
    // Agrega una animación para que desaparezca la carta
    e.target.classList.add("zoomOut");
    console.log(e.target);

    // Espera 1s y la borra del DOM
    setTimeout( function(){
        e.target.remove();
    }, 1000 );

    // Indica la carta que sacaste en el resultado
    cartaQueSalio.contentText = e.target.getAttribute("data-numero");
    console.log(e.target.getAttribute("data-numero"));
}

// Inicia la partida de jugada
function jugarAhora(e)
{
    // e.preventDefault();
    console.log(e.target);
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