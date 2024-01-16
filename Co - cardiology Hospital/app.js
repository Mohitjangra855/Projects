
let content=document.querySelector(".drop-down-content");
let arrowIcon=document.querySelector(".arrow-icon");
let container=document.querySelector(".drop-down-container>li");
let main=document.querySelector("main");
container.addEventListener("click",()=>{
content.classList.toggle("open");
arrowIcon.classList.toggle("arrow-icon-rotate");
})
main.addEventListener("click",()=>{
    content.classList.remove("open");
    arrowIcon.classList.remove("arrow-icon-rotate");
})
let li = document.querySelectorAll(".drop-down-content .li")
li.addEventListener("click", show);
function show(li) {
    let txt = li.innerText;
    let h4 = document.querySelector(".change-it");
    h4.innerText = txt.slice(0, 3);

}
