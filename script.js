const showMenuBar = document.querySelector("#showMenuBar");
const hideMenuBar = document.querySelector("#hideMenuBar");
const menuBar = document.getElementById("menu-bar");


showMenuBar.addEventListener("click", () => {
    menuBar.style.display = "block";
    menuBar.classList.add("menu");
    hideMenuBar.style.display = "block";
    showMenuBar.style.display = "none";
})

hideMenuBar.addEventListener("click", () => {
    menuBar.style.display = "none";
    menuBar.classList.remove("menu");
    hideMenuBar.style.display = "none";
    showMenuBar.style.display = "block";
})