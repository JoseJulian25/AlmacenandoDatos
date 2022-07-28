import { addTask } from "./js/addTask.js";
import { displayTask } from "./js/readTask.js";

const btn = document.querySelector("[data-form-btn]");


btn.addEventListener("click", addTask );
displayTask();
