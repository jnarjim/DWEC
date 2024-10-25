//3. Ejercicio JavaScript: Lista de compras

const newItemInput = document.getElementById('newItemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemsList = document.getElementById('itemsList');

function addItem() {
    // Obtener el valor del input y limpiar espacios
    const itemValue = newItemInput.value.trim();

    // Asegurarse de que el input no esté vacío
    if (itemValue === '') {
        alert('Por favor, inserta un ítem.');
        return;
    }
// Crear un nuevo elemento de lista (<li>)
const newItem = document.createElement('li');
newItem.textContent = itemValue;

// Crear el botón de completar
const completeBtn = document.createElement('button');
completeBtn.className = 'completeBtn';
completeBtn.innerHTML = '<span class="material-icons">check_circle</span>'; // Icono de completar
completeBtn.addEventListener('click', () => {
    newItem.classList.toggle('completed');
});

// Crear el botón de eliminar
const deleteBtn = document.createElement('button');
deleteBtn.className = 'deleteBtn';
deleteBtn.innerHTML = '<span class="material-icons">delete</span>'; // Icono de eliminar
deleteBtn.addEventListener('click', () => {
    itemsList.removeChild(newItem);
});

// Agregar los botones al nuevo ítem
newItem.appendChild(completeBtn);
newItem.appendChild(deleteBtn);

// Agregar el nuevo ítem a la lista
itemsList.appendChild(newItem);

// Limpiar el input después de agregar el ítem
newItemInput.value = '';
}
// Asociar la función addItem al evento click del botón "Agregar"
addItemBtn.addEventListener('click', addItem);

// Permitir agregar ítems con la tecla Enter
newItemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});