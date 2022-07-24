const eliminarLista = () =>{
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteList)
    return i;
}

const deleteList = (evento) => {
    const elementoPadre = evento.target.parentElement;
    elementoPadre.remove();
}

export default eliminarLista;