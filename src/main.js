import "./style.css";

const app = document.getElementById("app");

const heading = document.createElement("h1");
const subHeading = document.createElement("h5")

app.id = "todoContainer";
heading.innerHTML = "Todos to be done";
subHeading.innerHTML = "..by me."

app.append(heading, subHeading);

const todoList = [
    "Don't snooze!", 
    "Make tasteful coffee", 
    "Give food to cat", 
    "Go for a walk", 
    "Code",    
];

const unorderedList = document.createElement("ul");
app.appendChild(unorderedList);

todoList.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = todo;
    unorderedList.appendChild(listItem);

    listItem.addEventListener("click", () => {
        listItem.innerHTML = "";
    });
});


