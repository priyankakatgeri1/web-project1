// Back to Top Button Script
document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.createElement("button");
    backToTopButton.textContent = "Back to Top";
    backToTopButton.classList.add("back-to-top");
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
