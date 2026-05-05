export const createHtmlHeader = () => {
    const header = document.createElement("header");
    const curlyBraceOpen = document.createElement("h1");
    const mainHeading = document.createElement("h1");
    const curlyBraceClose = document.createElement("h1");

    curlyBraceOpen.innerHTML = "{";
    mainHeading.innerHTML = "The Todos";
    curlyBraceClose.innerHTML = "}";
    curlyBraceOpen.classList = "text-warning display-1";
    mainHeading.classList = "text-primary display-1";
    curlyBraceClose.classList = "text-warning display-1";
    header.classList = "d-flex gap-2 m-5";

    header.append(curlyBraceOpen, mainHeading, curlyBraceClose);
    main.insertBefore(header, formTodo);
};