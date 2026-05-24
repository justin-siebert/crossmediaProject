const listenBtn = document.getElementById("listenBtn");
const volumeReminder = document.querySelector(".volume-reminder");
const introContainer = document.getElementById("introContainer");
const gameplayArea = document.getElementById("gameplayArea");
const buttons = document.querySelectorAll(".shootBtn");

// Skapa ljudobjektet (ändra sökvägen om din fil heter något annat)
const finalAudio = new Audio("../ljud/endMeeting.mp3");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 1. LYSSNA-KNAPPEN
listenBtn.addEventListener("click", () => {
    listenBtn.disabled = true;
    listenBtn.textContent = "AVLYSSNAR MÖTET...";
    if (volumeReminder) volumeReminder.remove();

    finalAudio.play().catch(error => {
        console.log("Ljuduppspelning misslyckades:", error);
        listenBtn.disabled = false;
        listenBtn.textContent = "FÖRSÖK IGEN";
    });
});

// 2. NÄR LJUDET ÄR KLART -> VISA SPELET
finalAudio.addEventListener("ended", async () => {
    // Tona ut intro-texten mjukt
    introContainer.style.opacity = "0";
    await sleep(1000);
    introContainer.remove(); // Ta bort helt från skärmen

    gameplayArea.classList.remove("displayNone");
    gameplayArea.style.opacity = "0";
    await sleep(50);
    gameplayArea.style.transition = "opacity 1.5s ease";
    gameplayArea.style.opacity = "1";
});

// 3. SKJUT-LOGIKEN OCH SLUTSCENEN
buttons.forEach((b) => {
    b.addEventListener("click", async () => {
        await sleep(500);
        document.body.classList.add("scene-change");

        await sleep(1500);

        // Visa explosionen
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.innerHTML = `<h1 class="boom-text">💥 Boom 💥</h1>`;
        
        document.body.classList.remove("scene-change");

        await sleep(2000);

        document.body.classList.add("scene-change");
        await sleep(1500);

        // Visa förklaringen att alla dog
        document.body.innerHTML = `
            <div class="final-message">
                Tydligen hade Mögelosten en bomb i väskan som du träffade. 
                <br><br>
                <span class="death-text">Alla dog inklusive du!</span>
            </div>
        `;
        
        document.body.classList.remove("scene-change");

        // Låt spelaren läsa texten i 4 sekunder innan skärmen slocknar för "THE END"
        await sleep(4000);

        document.body.classList.add("scene-change");
        await sleep(1500);

        // NYTT: Rensa spara-filen helt i bakgrunden
        localStorage.clear();

        // NYTT: Visa den gigantiska THE END-texten
        document.body.innerHTML = `<h1 class="the-end-text">THE END</h1>`;
        
        document.body.classList.remove("scene-change");
    });
});