import { todos } from "./models/todos";
import { dones } from "./models/dones";

 //create todos -> remove todo from todos -> add it to dones
export const createHtmlTodos = () => {
    const todosContainer = document.getElementById("todosContainer");
    const ul = document.createElement("ul");

    todosContainer.innerHTML = "";

    todos.forEach((todo, i) => {
        const li = document.createElement("li");

        li.innerHTML = todo;

        li.addEventListener("click", () => {
            dones.push(todos[i]);
            todos.splice(i, 1);

            createHtmlTodos();
            createHtmlDones();
        });
        
        ul.appendChild(li);
    });
    
    todosContainer.appendChild(ul);
};

//create dones -> remove done from dones -> add it to todos
export const createHtmlDones = () => {
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

            createHtmlTodos();
            createHtmlDones();
        });
    });
    
    donesContainer.appendChild(ulDones);
}; 