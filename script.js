// Funktion für den Start-Button
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("startPage").style.display = "none";  // Verstecke die Startseite
    startLightShow();  // Starte die Lichtshow
});

// Funktion für die Lichtshow
function startLightShow() {
    let colors = ["orange", "yellow"];
    let index = 0;
    setInterval(function() {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // Wechsel zwischen 0 und 1
    }, 1000); // 1 Sekunde für den Farbwechsel
}