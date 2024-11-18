export default function menuPage() {
    const content = document.querySelector("#content");

    const section = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    section.appendChild(h1);

    content.appendChild(section);
}
