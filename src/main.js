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

