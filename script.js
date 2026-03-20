// Welcome alert
window.onload = function () {
    alert("Welcome to My Resume 😊");
};

// Change heading color when clicked
document.querySelectorAll("h2").forEach(item => {
    item.addEventListener("click", function () {
        this.style.color = "orange";
    });
});

// Auto Date
document.addEventListener("DOMContentLoaded", function () {
    const dateSpan = document.getElementById("date");
    if (dateSpan) {
        dateSpan.innerText = new Date().toLocaleDateString();
    }
});