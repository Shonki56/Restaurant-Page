export default function aboutPage() {
    const content = document.querySelector("#content");

    const section = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "About";
    section.appendChild(h1);

    content.appendChild(section);
}
