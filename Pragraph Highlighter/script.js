const texts = document.querySelectorAll(".text");
const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");

// Turn all ON
onBtn.addEventListener("click", () => {
    texts.forEach(text => text.classList.add("on"));
});

// Turn all OFF
offBtn.addEventListener("click", () => {
    texts.forEach(text => text.classList.remove("on"));
});

// Click individual paragraph to toggle
texts.forEach(text => {
    text.addEventListener("click", () => {
        text.classList.toggle("on");
    });
});
