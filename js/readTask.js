import { CreateTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { unicasFechas, ordenarFechas } from "../services/date.js";

export const displayTask = () => { 
    const list = document.querySelector("[data-list]");

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const fechas =  unicasFechas(taskList);
    ordenarFechas(fechas)
    

    fechas.forEach((fecha)=> {
        const fechaMoment = moment(fecha, "DD/MM/YYYY");

        list.appendChild(dateElement(fecha));

        taskList.forEach((task) => {
            const taskfechas = moment(task.dateFormat, "DD/MM/YYYY");

            const diferencia = fechaMoment.diff(taskfechas);
            
            if(diferencia === 0){
                list.appendChild((CreateTask(task)));
            }
            

            
        })
    })

    }

    
