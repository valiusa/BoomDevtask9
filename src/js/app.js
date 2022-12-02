//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    const imgDiv = document.querySelector(".image");
    imgDiv.addEventListener("click", () => {
        imgDiv.setAttribute("style", "transform: scale(1.0, 2.0)");
    });

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        alert("💣");
    });
});
