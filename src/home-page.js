export default function homepage() {
    const content = document.querySelector("#content");

    const section = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Home Page";
    section.appendChild(h1);

    const homepageText = document.createElement("p");
    homepageText.textContent =
        "A lovely little restaurant in the middle of the peak district serving high land venison and pheasant";
    section.appendChild(homepageText);

    content.appendChild(section);
}
