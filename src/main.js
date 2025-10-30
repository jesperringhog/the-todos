import "./style.css";

const main = document.getElementById("main");
main.classList = "d-flex flex-column align-items-center";

//add new todo through form
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
    createHtmlForTodos();
});

//sort todos 
const sortContainer = document.getElementById("sortContainer");
const iconAlpha = document.createElement("i");
const iconReverse = document.createElement("i");

iconAlpha.innerHTML = "Alpha";
iconReverse.innerHTML = "Reverse";
sortContainer.classList = "d-flex gap-5";

sortContainer.append(iconAlpha, iconReverse);

iconAlpha.addEventListener("click", () => {
    todos.sort();
    createHtmlForTodos();
});

iconReverse.addEventListener("click", () => {
    todos.reverse();
    createHtmlForTodos();
});

//arrays
const todos = [
    "Lägg till möjligheten att kunna sortera",
    "Skapa och sortera i nya js-filer",
    "Implementera Bootstrap"
];

const dones = [];


//remove todo from todos -> add it to dones
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

//remove todo from dones -> add it to todos
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

//show todos
createHtmlForTodos();
//show dones
createHtmlForDones();