import { todos } from "../data/todos";
import { dones } from "../data/dones";
import { createHtmlDones } from "./donesUtil";

export const createHtmlTodos = () => {
    const todosContainer = document.getElementById("todosContainer");
    const headingTodos = document.createElement("h2");
    const ul = document.createElement("ul");

    todosContainer.innerHTML = "";
    todosContainer.classList = "d-flex flex-column bg-danger border border-5 border-danger rounded-5 m-5 px-1 pb-5 w-75";
    headingTodos.innerHTML = "[Todos to be done]";
    headingTodos.classList = "display-5 text-dark text-center m-5";

    todos.forEach((todo, i) => {
        const li = document.createElement("li");
        const checkIconTodo = document.createElement("i");
        const pTodo = document.createElement("p");

        checkIconTodo.classList = "bi bi-circle text-dark fs-1";
        checkIconTodo.style.cursor = "pointer";
        pTodo.innerHTML = todo;
        pTodo.classList = "text-dark fs-3 m-1";
        li.classList = "d-flex gap-3 align-items-center";
        li.style.listStyle = "none";

        checkIconTodo.addEventListener("mouseenter", () => {
            checkIconTodo.classList = "bi bi-check-circle-fill text-dark fs-1";
        });

        checkIconTodo.addEventListener("mouseleave", () => {
            checkIconTodo.classList = "bi bi-circle text-dark fs-1";
        });

        checkIconTodo.addEventListener("click", () => {
            dones.push(todos[i]);
            todos.splice(i, 1);

            createHtmlTodos();
            createHtmlDones();
        });
        
        li.append(checkIconTodo, pTodo);
        ul.appendChild(li);
    });
    
    todosContainer.append(headingTodos, ul);

    if(todos.length < 1) {
        todosContainer.classList = "";
        headingTodos.innerHTML = "";
    }
};