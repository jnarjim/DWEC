
let tienda = [
    { producto: "monitor", precio: 200 },
    { producto: "teclado", precio: 20 },
    { producto: "raton", precio: 10 },
];

function comprar(producto) {
    producto = producto.toLowerCase();

    for (let i = 0; i < tienda.length; i++) {
        if (tienda[i].producto === producto) {
            return `Ese producto cuesta ${tienda[i].precio}€`;
        }
    }

    return "No tenemos ese producto";
}

console.log(comprar("monitor"));
console.log(comprar("teclado"));
console.log(comprar("auriculares"));