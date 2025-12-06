const bulbs = document.querySelectorAll(".bulb");
const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");

onBtn.addEventListener("click", () => {
    bulbs.forEach(bulb => bulb.style.backgroundColor = "yellow")
});

offBtn.addEventListener("click", () => {
    bulbs.forEach(bulb => bulb.style.backgroundColor = "gray")
});

