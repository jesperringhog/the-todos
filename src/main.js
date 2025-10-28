import "./style.css";

document.body.className = "bg-dark";

const app = document.getElementById("app");
if(app!== null) {
    app.id = "todoContainer";
}

//Todos heading
const curlyBraceOpen = document.createElement("p");
const heading = document.createElement("h1");
const curlyBraceClose = document.createElement("p");
const headingContainer = document.createElement("div");
const subHeading = document.createElement("h3");

curlyBraceOpen.innerHTML = "{";
curlyBraceOpen.classList = "display-1 text-warning pt-5";
heading.innerHTML = "Todos to be done";
curlyBraceClose.innerHTML = "}";
curlyBraceClose.classList = "display-1 text-warning pt-5";
heading.classList = "display-1 text-primary pt-5";
headingContainer.className = "d-flex";
subHeading.innerHTML = "one by one, everyday (in a loop)";
subHeading.classList = "text-info pb-5";
app.classList = "d-flex flex-column align-items-center";

headingContainer.append(curlyBraceOpen, heading, curlyBraceClose)
app.append(headingContainer, subHeading);



//Todos array
const todoList = [
    "Don't call snooze!", 
    "Click coffee maker", 
    "If cat's hungry, feed cat", 
    "HouseLeave ..for a walk", 
    "Return home",    
];


//Todos template
const unorderedList = document.createElement("ul");
unorderedList.classList = "p-5 w-50 border border-5 border-danger rounded-5";
app.appendChild(unorderedList);


//Dones template
const headingDone = document.createElement("h2");
const orderedList = document.createElement("ol");
const listIconDone = document.createElement("i")
const listParaDone = document.createElement("p");
const listItemDone = document.createElement("li");

listItemDone.append(listIconDone, listParaDone);
orderedList.appendChild(listItemDone);
app.append(headingDone, orderedList);

//Click-event to show Dones
const listDone = () => {
    headingDone.innerHTML = "Dones to be constant";
    headingDone.classList = "text-success p-5";
    orderedList.classList = "p-5 w-50 border border-5 border-success rounded-5";

    todoList.forEach((done) => {
        listIconDone.classList = "bi bi-check-circle-fill fs-4 text-success";
        listParaDone.innerHTML = done;
        listParaDone.classList = "text-success fs-4";
        listItemDone.className = "d-flex gap-3";
    });
}


//Show Todos
todoList.forEach((todo) => {

    const clickDone = () => {
        listIcon.classList = "bi bi-check-circle-fill fs-4 text-success";
        listParagraph.innerHTML = "";
        listItem.className = "lh-2";

        listDone();
    }

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

    listIcon.addEventListener("click", clickDone);

    listIcon.addEventListener("mouseenter", () => {
        listIcon.classList = "bi bi-check-circle fs-4 text-danger";
        if(listParagraph.innerHTML === "") {
            listIcon.classList = "bi bi-check-circle-fill fs-4 text-success";
        }
    });

    listIcon.addEventListener("mouseleave", () => {
        listIcon.classList = "bi bi-circle fs-4 text-danger";
        if(listParagraph.innerHTML === "") {
            listIcon.classList = "bi bi-check-circle-fill fs-4 text-success";
        }
    });
});