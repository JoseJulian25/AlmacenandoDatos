import checkComplete from "./checkComplete.js";
import eliminarLista from "./deleteIcon.js";
import { displayTask } from "./readTask.js";

 export const addTask = (evento) =>{
    evento.preventDefault();

    const task = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const textoInput = input.value;
    
    const calendar = document.querySelector("[data-form-date]");
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if(textoInput === "" || date === ""){
        return 
    }

    input.value = "";
    calendar.value = "";

    const complete = false

    const taskObject = {
        textoInput,
        dateFormat,
        complete,
        id: uuid.v4()
    }

    task.innerHTML = "";
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    
    taskList.push(taskObject);

    localStorage.setItem("tasks", JSON.stringify(taskList))

    displayTask();
}



export const CreateTask = ({textoInput, dateFormat, complete, id}) => {
    const lista = document.createElement("li");
        lista.classList.add("card");

    const taskDiv = document.createElement("div");

    const check = checkComplete(id)
    if(complete){
        check.classList.toggle("fas")
        check.classList.toggle("completeIcon")
        check.classList.toggle("far");
    }

    const titleSpan = document.createElement("span");
        titleSpan.classList.add("task");
        titleSpan.innerText = textoInput;

    taskDiv.appendChild(check);
    taskDiv.appendChild(titleSpan);

    lista.appendChild(taskDiv);
    lista.appendChild(eliminarLista(id));
    return lista;
    
}