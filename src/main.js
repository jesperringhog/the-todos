import "./style.css";

const todos = [
    "G",
    "Skapa en lista", 
    "Presentera listan på skärmen",
    "Klickhändelse/ta bort todo/markera som klar",
    "Implementera ett grafiskt ramverk",
    "VG",
    "Visa klara todos i ny lista",
    "Skapa formulär för nya todos",
    "Lägg till möjligheten att kunna sortera",
];

//funktion för att lägga till klara uppgifter i ny lista
const createHtmlForDones = () => {
    const ulDones = document.createElement("ul");

    ulDones.innerHTML = "";
    ulDones.className = "m-5";

    todos.forEach((todo) => {
        const inputDone = document.createElement("input");
        const liDone = document.createElement("li");
        const divDone = document.createElement("div");

        inputDone.type = "checkbox";
        liDone.innerHTML = todo;
        liDone.style.listStyle = "none";
        divDone.classList = "d-flex gap-3 m-3";

        divDone.append(inputDone, liDone);
        ulDones.appendChild(divDone);
    });
    
    app.appendChild(ulDones);
};


//funktion för att visa Todos
const createHtmlForTodos = () => {
    const app = document.getElementById("app");
    const ul = document.createElement("ul");

    app.innerHTML = "";
    ul.className = "m-5";

    todos.forEach((todo, i) => {
        const input = document.createElement("input");
        const li = document.createElement("li");
        const div = document.createElement("div");

        input.type = "checkbox";
        li.innerHTML = todo;
        li.style.listStyle = "none";
        div.classList = "d-flex gap-3 m-3";

        input.addEventListener("click", () => {
            todos.splice(i, 1);
            console.log(todos);
            createHtmlForTodos();

            //anropa funktion för att lägga till klara uppgifter i ny lista
        });

        div.append(input, li);
        ul.appendChild(div);
    });
    
    app.appendChild(ul);
};

createHtmlForTodos();

createHtmlForDones();