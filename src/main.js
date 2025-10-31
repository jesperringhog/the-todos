import "./style.css";
import { todos } from "./models/todos";
import { dones } from "./models/dones";
import { createHtmlDones } from "./utils";
import { createHtmlTodos } from "./utils";

document.body.className = "bg-dark";

const main = document.getElementById("main");
main.classList = "d-flex flex-column align-items-center";

//create header
const createHtmlHeader = () => {
    const header = document.createElement("header");
    const curlyBraceOpen = document.createElement("h1");
    const mainHeading = document.createElement("h1");
    const curlyBraceClose = document.createElement("h1");

    curlyBraceOpen.innerHTML = "{";
    mainHeading.innerHTML = "The Todos";
    curlyBraceClose.innerHTML = "}";
    curlyBraceOpen.classList = "text-warning display-1";
    mainHeading.classList = "text-primary display-1";
    curlyBraceClose.classList = "text-warning display-1";
    header.classList = "d-flex gap-2 m-5";

    header.append(curlyBraceOpen, mainHeading, curlyBraceClose);
    main.insertBefore(header, formTodo);
};

//add new todo through form
const createHtmlFormTodo = () => {
    const formTodo = document.getElementById("formTodo");
    const labelTodo = document.createElement("label");
    const inputTodo = document.createElement("input");
    const buttonTodo = document.createElement("button");

    formTodo.classList = "mb-5"
    labelTodo.innerHTML = "Todo";
    labelTodo.classList = "text-white m-1";
    inputTodo.placeholder = "to be made";
    inputTodo.classList = "rounded-pill p-3";
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

//sort todos 
const createHtmlSortTodos = () => {
    const sortContainer = document.getElementById("sortContainer");
    const iconAlpha = document.createElement("i");
    const iconReverse = document.createElement("i");

    iconAlpha.classList = "bi bi-sort-alpha-down text-white display-1";
    iconAlpha.style.cursor = "pointer";
    iconReverse.classList = "bi bi-arrow-down-up text-white display-1";
    iconReverse.style.cursor = "pointer";
    sortContainer.classList = "d-flex gap-5";

    sortContainer.append(iconAlpha, iconReverse);

    iconAlpha.addEventListener("mouseenter", () => {
        iconAlpha.classList = "bi bi-sort-alpha-down text-warning display-1";
    });

    iconAlpha.addEventListener("mouseleave", () => {
        iconAlpha.classList = "bi bi-sort-alpha-down text-white display-1";
    });

    iconAlpha.addEventListener("click", () => {
        todos.sort();
        createHtmlTodos();
    });

    iconReverse.addEventListener("mouseenter", () => {
        iconReverse.classList = "bi bi-arrow-down-up text-warning display-1";
    });

    iconReverse.addEventListener("mouseleave", () => {
        iconReverse.classList = "bi bi-arrow-down-up text-white display-1";
    });

    iconReverse.addEventListener("click", () => {
        todos.reverse();
        createHtmlTodos();
    });
};

//show header
createHtmlHeader();
//show formTodos
createHtmlFormTodo();
//show sortTodos
createHtmlSortTodos();
//show todos
createHtmlTodos();
//show dones
createHtmlDones();