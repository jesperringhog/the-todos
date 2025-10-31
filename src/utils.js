import { todos } from "./models/todos";
import { dones } from "./models/dones";

 //create todos -> remove todo from todos -> add it to dones
export const createHtmlTodos = () => {
    const todosContainer = document.getElementById("todosContainer");
    const headingTodos = document.createElement("h2");
    const ul = document.createElement("ul");

    todosContainer.innerHTML = "";
    todosContainer.classList = "bg-danger border border-5 border-danger rounded-5 m-5 p-5 w-50";
    headingTodos.innerHTML = "[Todos to be done]";
    headingTodos.classList = "display-4 text-dark text-center mb-4";

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
        donesContainer.classList = "bg-success border border-5 border-success rounded-5 m-5 p-5 w-50";
        headingDones.innerHTML = "[Let dones be constant]";
        headingDones.classList = "display-4 text-dark text-center mb-4";
    } else {
        donesContainer.classList = "";
        headingDones.innerHTML = "";
    }
    
    donesContainer.append(headingDones, ulDones);
}; 