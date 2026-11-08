function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString("pl-PL", {
        timeZone: "Europe/Warsaw"
    });
}

updateTime();
setInterval(updateTime, 1000);