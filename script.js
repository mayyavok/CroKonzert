let licht = document.getElementById('licht');

// Array mit verschiedenen Farben
const farben = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

// Funktion, die das Licht alle 500ms in einer neuen Farbe ändern lässt
function farbeWechseln() {
    let zufall = Math.floor(Math.random() * farben.length); // Zufällige Farbe auswählen
    licht.style.backgroundColor = farben[zufall]; // Farbe auf das Licht anwenden
}

// Alle 500ms die Farbe wechseln
setInterval(farbeWechseln, 500);