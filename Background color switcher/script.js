const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");
const box = document.getElementById("box");

redBtn.onclick = () => box.style.backgroundColor = "red";
greenBtn.onclick = () => box.style.backgroundColor = "green";
blueBtn.onclick = () => box.style.backgroundColor = "blue";
