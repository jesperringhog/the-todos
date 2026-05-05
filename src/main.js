import "./style.css";
import { todos } from "./data/todos";
import { dones } from "./data/dones";
import { createHtmlHeader } from "./utils/headerUtil";
import { createHtmlFormTodo } from "./utils/formUtil";
import { createHtmlSortTodos } from "./utils/sortUtil";
import { createHtmlTodos } from "./utils/todosUtil";
import { createHtmlDones } from "./utils/donesUtil";

document.body.className = "bg-dark";

const main = document.getElementById("main");
main.classList = "d-flex flex-column align-items-center";

createHtmlHeader();
createHtmlFormTodo();
createHtmlSortTodos();
createHtmlTodos();
createHtmlDones();