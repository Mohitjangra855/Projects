const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarClose = document.querySelector(".sidebarClose"),
    sidebarOpen = document.querySelector(".sidebarOpen");
// js code toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
});

// js code toggle search box
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

// js code to toggle sidebar
sidebarOpen.addEventListener("click",()=>{
nav.classList.add("active");
});
sidebarClose.addEventListener("click",()=>{
nav.classList.remove("active");
});
// body.addEventListener("click",e =>{
// let clikedElm
// });
