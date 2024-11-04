//4. Ejercicio Javascript: Ocultar y mostrar elementos
let box = document.getElementById("box");
let toggleBtn = document.getElementById("toggleBtn");

function toggleBox() {
    if (box.style.display === "none") {
        box.style.display = "block";
        toggleBtn.textContent = "Ocultar Caja";
    } else {
        box.style.display = "none";
        toggleBtn.textContent = "Mostrar Caja";
    }
}

// Agregar el evento click al botón
toggleBtn.addEventListener("click", toggleBox);