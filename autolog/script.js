let logoutTimer;
// Functiion to start or reset the timer
function startTimer() {
    clearTimeout(logoutTimer);
    document.getElementById("status").innerText = "status: Active";
    logoutTimer = setTimeout(() => {
        document.getElementById("status").innerText = 
            "Status Logged out due to inactivity!";
    }, 1000); //10seconds
}

//Detect user activity 
documente.addEventListener("mousemove", startTimer);
documente.addEventListener("keydown", startTimer);

startTimer();