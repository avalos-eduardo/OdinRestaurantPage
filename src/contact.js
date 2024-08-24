import {content} from "./index.js";

export function generateContactPage(){
    const contactImg = document.createElement("img");
    contactImg.setAttribute("src", "https://media.istockphoto.com/id/1134715589/photo/pizza-inside-an-oven-in-the-italian-pizzeria.jpg?s=612x612&w=0&k=20&c=g5vIkDDg-zuQs0Sp2PF2mmgZA5qAfesa5qTh-NNSNEY=");
    contactImg.setAttribute("id", "contact-img");
    content.appendChild(contactImg);

    const contactHeader = document.createElement("h1");
    contactHeader.innerHTML = "Contact Us!";
    content.appendChild(contactHeader);

    const phoneNum = document.createElement("h2");
    phoneNum.innerHTML = "Phone Number: 123-456-7890";
    content.appendChild(phoneNum);

    const email = document.createElement("h2");
    email.innerHTML = "pizza@example.com";
    content.appendChild(email);

    const address = document.createElement("h2");
    address.innerHTML = "Address: 123 Main Street";
    content.appendChild(address);

    const hours = document.createElement("h2");
    hours.innerHTML = "Hours | M-F: 9am-8pm | Sat: 10am - 5pm";
}