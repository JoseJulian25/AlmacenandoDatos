import checkComplete from "./js/checkComplete.js";
import eliminarLista from "./js/deleteIcon.js";
(() =>{
const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");


const CreateTask = (evento) =>{
    evento.preventDefault();
    const textoInput = input.value;
    const task = document.querySelector("[data-list]");

    const lista = document.createElement("li");
    lista.classList.add("card");

    const taskDiv = document.createElement("div");

    const titleSpan = document.createElement("span");
    titleSpan.classList.add("task");
    titleSpan.innerText = textoInput;

    taskDiv.appendChild(checkComplete())
    taskDiv.appendChild(titleSpan);

    input.value = "";
    lista.appendChild(taskDiv);
    lista.appendChild(eliminarLista())
    task.appendChild(lista);
    
}

btn.addEventListener("click", CreateTask );

})();