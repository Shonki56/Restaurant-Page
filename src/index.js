import home from "./home-page";
import menu from "./menu-page";
import about from "./about-page";
import "./styles.css";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const aboutButton = document.querySelector("#aboutBtn");

function deleteContent() {
    content.innerHTML = "";
}

homeButton.addEventListener("click", function () {
    deleteContent();
    home();
});

menuButton.addEventListener("click", function () {
    deleteContent();
    menu();
});

aboutButton.addEventListener("click", function () {
    deleteContent();
    about();
});

// Inital page
home();

console.log("Working!");
