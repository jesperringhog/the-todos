import "./style.css";

document.body.className = "bg-dark";

const app = document.getElementById("app");
if(app!== null) {
    app.id = "todoContainer";
}

const heading = document.createElement("h1");
const subHeading = document.createElement("h3");

heading.innerHTML = "Todos to be done";
heading.classList = "display-1 text-warning pt-5";

subHeading.innerHTML = "..by me."
subHeading.classList = "text-white pb-5";

app.append(heading, subHeading);
app.classList = "d-flex flex-column align-items-center";

const todoList = [
    "Don't snooze!", 
    "Make tasteful coffee", 
    "Give food to cat", 
    "Go for a walk", 
    "Code",    
];

const unorderedList = document.createElement("ul");
unorderedList.classList = "p-5 w-50 border border-5 border-danger rounded-5";
app.appendChild(unorderedList);

todoList.forEach((todo) => {
    const listIcon = document.createElement("i");
    const listParagraph = document.createElement("p");
    const listItem = document.createElement("li");

    listIcon.classList = "bi bi-circle fs-4 text-danger";
    listIcon.style.cursor = "pointer";
    listParagraph.innerHTML = todo;
    listParagraph.className = "text-danger fs-4";
    listItem.classList = "d-flex gap-3";

    listItem.append(listIcon, listParagraph);
    unorderedList.appendChild(listItem);

    listItem.addEventListener("click", () => {
        listParagraph.innerHTML = "";
        listIcon.classList = "bi bi-check-circle-fill fs-4 text-success";
    });
});


