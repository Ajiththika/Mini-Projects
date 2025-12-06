const countDisplay = document.querySelector("#count");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.innerText = count;
});

decreaseBtn.addEventListener("click", () => {
    count--;
    countDisplay.innerText = count;
});

resetBtn.addEventListener("click", () => {
    count=0;
    countDisplay.innerText = count;
});