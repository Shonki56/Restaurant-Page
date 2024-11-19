export default function menuPage() {
    const content = document.querySelector("#content");

    const section = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    section.appendChild(h1);

    const mainText = document.createElement("p");
    mainText.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    section.appendChild(mainText);

    content.appendChild(section);
}
