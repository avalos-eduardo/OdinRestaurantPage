import {content} from "./index.js";

export function generateHomePage(){
    const luigiLogo = document.createElement("img");
    luigiLogo.setAttribute("src", "https://media.istockphoto.com/id/1297109073/vector/pizza-store-logo.jpg?s=612x612&w=0&k=20&c=SL9iuMHn_LWYOkZhNrLOcS1dqWEn5i1YN6lEfIepK3Q=");
    luigiLogo.setAttribute("id", "luigiLogo");
    luigiLogo.setAttribute("alt", "Logo for Luigi's Pizzeria");
    content.appendChild(luigiLogo);

    let homeHeader = document.createElement("h1");
    homeHeader.innerHTML = "Luigi's Pizzeria";
    let homeDesc = document.createElement("h3");
    homeDesc.innerHTML = "Welcome to Luigi's Pizzeria! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta, temporibus quam accusamus rerum commodi possimus distinctio pariatur asperiores reiciendis soluta iste facere quis at explicabo eum similique fugiat odio?";
    content.appendChild(homeHeader);
    content.appendChild(homeDesc);
}