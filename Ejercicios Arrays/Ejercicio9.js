
let turnos = [
    { dia: "lunes", encargado: "Maria" },
    { dia: "martes", encargado: "Luis" },
    { dia: "miércoles", encargado: "Antonia" },
    { dia: "jueves", encargado: "Pedro" },
    { dia: "viernes", encargado: "Marisa" }
];

function servicio(dia) {
    dia = dia.toLowerCase();

    for (let i = 0; i < turnos.length; i++) {
        if (turnos[i].dia === dia) {
            return `Este dia se encarga ${turnos[i].encargado}`;
        }
    }

    return "No hay servicio para este dia";
}

console.log(servicio("lunes"));
console.log(servicio("jueves"));
console.log(servicio("sábado"));