import { todos } from "../data/todos";
import { createHtmlTodos } from "./todosUtil";

//add new todo through form
export const createHtmlFormTodo = () => {
    const formTodo = document.getElementById("formTodo");
    const labelTodo = document.createElement("label");
    const inputTodo = document.createElement("input");
    const buttonTodo = document.createElement("button");

    formTodo.classList = "mx-5 mb-5 px-5 d-flex flex-wrap justify-content-center align-items-center"
    labelTodo.innerHTML = "Todo";
    labelTodo.classList = "text-white m-1";
    inputTodo.placeholder = "to be made";
    inputTodo.classList = "rounded-pill p-3 text-center";
    buttonTodo.innerHTML = "with a click";
    buttonTodo.classList = "rounded-pill p-3";

    formTodo.append(labelTodo, inputTodo, buttonTodo);

    buttonTodo.addEventListener("mouseenter", () => {
        buttonTodo.classList = "rounded-pill p-3 bg-warning";
    });

    buttonTodo.addEventListener("mouseleave", () => {
        buttonTodo.classList = "rounded-pill p-3";
    });

    formTodo.addEventListener("submit", (e) => {
        e.preventDefault();

        if(inputTodo.value.length > 0) {
            todos.push(inputTodo.value.trim());
            createHtmlTodos();
        };
    });
};