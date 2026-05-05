import { todos } from "../data/todos";
import { dones } from "../data/dones";
import { createHtmlTodos } from "./todosUtil";

//create dones -> remove done from dones -> add it to todos
export const createHtmlDones = () => {
    const donesContainer = document.getElementById("donesContainer");
    const headingDones = document.createElement("h2");
    const ulDones = document.createElement("ul");

    donesContainer.innerHTML = "";

    dones.forEach((done, i) => {
        const liDones = document.createElement("li");
        const checkIconDone = document.createElement("i");
        const pDone = document.createElement("p");

        checkIconDone.classList = "bi bi-check-circle text-dark fs-1";
        checkIconDone.style.cursor = "pointer";
        pDone.innerHTML = done;
        pDone.classList = "text-dark fs-3 m-1";
        liDones.classList = "d-flex gap-3 align-items-center";
        liDones.style.listStyle = "none";

        liDones.append(checkIconDone, pDone);
        ulDones.appendChild(liDones);

        checkIconDone.addEventListener("mouseenter", () => {
            checkIconDone.classList = "bi bi-x-circle-fill text-dark fs-1";
        });

        checkIconDone.addEventListener("mouseleave", () => {
            checkIconDone.classList = "bi bi-check-circle text-dark fs-1";
        });

        liDones.addEventListener("click", () => {
            todos.push(dones[i]);
            dones.splice(i, 1);

            createHtmlTodos();
            createHtmlDones();
        });
    });

    if(dones.length > 0) {
        donesContainer.classList = "d-flex flex-column bg-success border border-5 border-success rounded-5 px-1 pb-5 w-75";
        headingDones.innerHTML = "[Let dones be constant]";
        headingDones.classList = "display-5 text-dark text-center m-5";
    } else {
        donesContainer.classList = "";
        headingDones.innerHTML = "";
    }
    
    donesContainer.append(headingDones, ulDones);
}; 