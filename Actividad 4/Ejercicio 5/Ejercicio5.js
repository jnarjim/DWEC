//5. Ejercicio JavaScript: Agregar tareas a un listado

let newTaskInput = document.getElementById("newTaskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = newTaskInput.value.trim();
    
    if (taskText !== "") {
        let taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        newTaskInput.value = "";
    }
}

addTaskBtn.addEventListener("click", addTask);