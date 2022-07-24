const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask)
    return i;
}

const completeTask = (evento) =>{
    const elementoCheck = evento.target;
    elementoCheck.classList.toggle("fas")
    elementoCheck.classList.toggle("completeIcon")
    elementoCheck.classList.toggle("far")
}

export default checkComplete;