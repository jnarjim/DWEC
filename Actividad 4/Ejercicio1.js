//1.Ejercicio JavaScript tipo examen: Mostrar frases
// aleatorias mediante CSS

//2.Ejercicio JavaScript: Cambio de color de forma aleatoria

const frasesFrikisInformatica = [
    "Cuando todo falla, culpa al compilador.",
    "El éxito de un programador se mide por la cantidad de café que ha consumido.",
    "La tecnología avanza tan rápido que el código que acabas de escribir ya está obsoleto.",
    "¿Ya probaste apagándolo y volviéndolo a encender?",
    "Escribir código es como hacer magia, excepto que hay muchos más hechizos fallidos.",
    "El hardware es lo que golpeas, el software es lo que insultas.",
    "El único sistema seguro es uno apagado, encerrado en una caja, y fundido en cemento.",
    "Hay dos cosas que son infinitas: el universo y los problemas con el software.",
    "Error 404: Sentido del humor no encontrado.",
    "Programar es tan fácil como conducir un coche, pero sin ruedas."
];

var colores = [
    "#ff0000", // Rojo
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
    "#00ff80", // Verde claro
    "#ff0080", // Rosa
    "#80ff00", // Verde lima
    "#0080ff", // Azul claro
    "#ffbf00", // Amarillo oscuro
    "#bf00ff", // Violeta oscuro
    "#00ffbf", // Turquesa
    "#bf00ff", // Púrpura
    "#00bfff", // Azul claro
    "#ff00bf", // Magenta oscuro
    "#80ff80", // Verde claro pastel
    "#ff80ff", // Rosa pastel
    "#80ffff" // Cian claro
    ];

    function obtenerValorAleatorio(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function mostrarFraseYColorAleatorio() {

        const fraseAleatoria = obtenerValorAleatorio(frasesFrikisInformatica);
    
        const colorAleatorio = obtenerValorAleatorio(colores);
    
        const elementoTexto = document.getElementById("texto-informatica");
        elementoTexto.textContent = fraseAleatoria;

        elementoTexto.style.color = colorAleatorio;

        const botonVerMas = document.getElementById("ver-mas-boton");
        botonVerMas.style.backgroundColor = colorAleatorio;
    }

    const botonVerMas = document.getElementById("ver-mas-boton");
    botonVerMas.addEventListener("click", mostrarFraseYColorAleatorio);    