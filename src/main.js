import "./style.css";

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
    console.log(todos);
    createHtmlForTodos();
});


const todos = [
    "Lägg till möjligheten att kunna sortera",
];

const dones = [];


const createHtmlForTodos = () => {
    const todosContainer = document.getElementById("todosContainer");
    const ul = document.createElement("ul");

    todosContainer.innerHTML = "";

    todos.forEach((todo, i) => {
        const li = document.createElement("li");

        li.innerHTML = todo;

        li.addEventListener("click", () => {
            dones.push(todos[i]);
            todos.splice(i, 1);

            createHtmlForTodos();
            createHtmlForDones();
        });
        
        ul.appendChild(li);
    });
    
    todosContainer.appendChild(ul);
};

const createHtmlForDones = () => {
    const donesContainer = document.getElementById("donesContainer");
    const ulDones = document.createElement("ul");
    donesContainer.innerHTML = "";

    dones.forEach((done, i) => {
        const liDones = document.createElement("li");
        liDones.innerHTML = done;
        ulDones.appendChild(liDones);

        liDones.addEventListener("click", () => {
            todos.push(dones[i]);
            dones.splice(i, 1);

            createHtmlForTodos();
            createHtmlForDones();
        });
    });
    
    donesContainer.appendChild(ulDones);
};

createHtmlForTodos();
createHtmlForDones();