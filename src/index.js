import "./style.css";
import {generateHomePage} from "./home.js";
import {generateMenuPage} from "./menu.js";
import {generateContactPage} from "./contact.js";
export const content = document.querySelector("#content");

generateHomePage();

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    generateHomePage();
})

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    generateMenuPage();
})

contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    generateContactPage();
})