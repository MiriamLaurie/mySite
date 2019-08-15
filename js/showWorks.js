let content = document.getElementById("work-content"),
    show    = document.getElementById("showContent");


show.addEventListener("click", () => {
    content.style.display = "flex",
    show.style.display = "none";
});

