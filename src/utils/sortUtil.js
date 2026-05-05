import { todos } from "../data/todos";
import { createHtmlTodos } from "./todosUtil";

export const createHtmlSortTodos = () => {
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