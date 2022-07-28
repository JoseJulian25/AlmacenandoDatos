import { displayTask } from "./readTask.js";

const eliminarLista = (id) =>{
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", () => deleteList(id))
    return i;
}

const deleteList = (id) => {
    const list = document.querySelector("[data-list]")
    const task = JSON.parse(localStorage.getItem("tasks"))
    const index = task.findIndex((item) => item.id === id)
    task.splice(index, 1 )
    list.innerHTML = ""
    localStorage.setItem("tasks", JSON.stringify(task))
    displayTask();
}

export default eliminarLista;