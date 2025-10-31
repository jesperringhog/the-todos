import "./style.css";
import { todos } from "./models/todos";
import { dones } from "./models/dones";
import { createHtmlDones } from "./utils";
import { createHtmlTodos } from "./utils";

const main = document.getElementById("main");
main.classList = "d-flex flex-column align-items-center";

//add new todo through form
const createHtmlFormTodo = () => {
    const formTodo = document.getElementById("formTodo");
    const labelTodo = document.createElement("label");
    const inputTodo = document.createElement("input");
    const buttonTodo = document.createElement("button");

    labelTodo.innerHTML = "Todo";
    inputTodo.placeholder = "to be made";
    buttonTodo.innerHTML = "with a click";

    formTodo.append(labelTodo, inputTodo, buttonTodo);

    formTodo.addEventListener("submit", (e) => {
        e.preventDefault();

        todos.push(inputTodo.value);
        createHtmlTodos();
    });
};

//sort todos 
const createHtmlSortTodos = () => {
    const sortContainer = document.getElementById("sortContainer");
    const iconAlpha = document.createElement("i");
    const iconReverse = document.createElement("i");

    iconAlpha.innerHTML = "Alpha";
    iconReverse.innerHTML = "Reverse";
    sortContainer.classList = "d-flex gap-5";

    sortContainer.append(iconAlpha, iconReverse);

    iconAlpha.addEventListener("click", () => {
        todos.sort();
        createHtmlTodos();
    });

    iconReverse.addEventListener("click", () => {
        todos.reverse();
        createHtmlTodos();
    });
};

//show formTodos
createHtmlFormTodo();
//show sortTodos
createHtmlSortTodos();
//show todos
createHtmlTodos();
//show dones
createHtmlDones();