document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".version-item");
    items.forEach((item, index) => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.transition = "opacity 0.6s";
            item.style.opacity = 1;
        }, index * 150);
    });
});
