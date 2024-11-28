async function startLightShow() {
    try {
        // Mikrofonzugriff anfordern
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        // Audio-Kontext erstellen
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);

        // Audio-Analyser einrichten
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; // Größe der Frequenzdaten
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        function changeBackground() {
            // Frequenzdaten abrufen
            analyser.getByteFrequencyData(dataArray);

            // Durchschnittliche Lautstärke berechnen
            const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

            // Farben basierend auf Lautstärke ändern
            if (avg > 150) {
                document.body.style.backgroundColor = "orange";
            } else {
                document.body.style.backgroundColor = "yellow";
            }

            // Nächste Animation starten
            requestAnimationFrame(changeBackground);
        }

        // Animation starten
        changeBackground();
    } catch (err) {
        console.error("Mikrofon konnte nicht verwendet werden:", err);
        alert("Mikrofonzugriff abgelehnt oder ein Fehler ist aufgetreten.");
    }
}

// Lichtshow starten
startLightShow();