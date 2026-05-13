const rebusArray = [
    {
        word1: "../bilder/emojies/pine-tree.png",
        word2: "../bilder/emojies/apple.png",
        correctAnswer: "pineapple",
        hint: "A tropical fruit with a spiky top"

    },
    {
        word1: "../bilder/emojies/butter.png",
        word2: "../bilder/emojies/fly.png",
        correctAnswer: "butterfly",
        hint: "Comes in different colors and patterns"

    },
    {
        word1: "../bilder/emojies/fire.png",
        word2: "../bilder/emojies/golden-retriever.png",
        correctAnswer: "hotdog",
        hint: "A popular food at baseball games"

    },
    {
        word1: "../bilder/emojies/pagophagia.png",
        word2: "../bilder/emojies/scream.png",
        correctAnswer: "icecream",
        hint: "A cold sweet treat"

    },
    {
        word1: "../bilder/emojies/sunny.png",
        word2: "../bilder/emojies/flower.png",
        correctAnswer: "sunflower",
        hint: "A tall yellow bloom"

    },
    {
        word1: "../bilder/emojies/stack-of-books.png",
        word2: "../bilder/emojies/worm.png",
        correctAnswer: "bookworm",
        hint: "Someone who loves to read"

    },
    {
        word1: "../bilder/emojies/dunes.png",
        word2: "../bilder/emojies/package.png",
        correctAnswer: "sandbox",
        hint: "Where children play at the playground"

    }
]

//fixa lika många svarsrutor som antal bokstäver i correctAnswer
//fixa loop för att få ut emojies

const body = document.querySelector("body");
const gamingArea = document.querySelector(".gamingArea");
const guessTheRebus = document.querySelector(".guessTheRebus");
const img1 = document.querySelector("#rebusImage1");
const img2 = document.querySelector("#rebusImage2");
const answerSection = document.querySelector(".answerSection");
const guessBtn = document.querySelector("#guessButton");
const hintBtn = document.querySelector("#hintButton");
const revealBtn = document.querySelector("#revealButton");
const nextBtn = document.createElement("button");
const phoneDiv = document.querySelector(".phone");
const actionsButtonsDiv = document.querySelector(".actionsButtons");
const hintMessage = document.querySelector(".hintMessage");
const hintTrackerForUser = document.getElementById("hintTrackerForUser");
const revealTrackerForUser = document.getElementById("revealTrackerForUser");

const overlayMessageDiv = document.createElement("div");
const victoryMessageDiv = document.createElement("div");
const victoryMessageText = document.createElement("p");
const correctAnswerText = document.createElement("p");
const img = document.createElement("img");

const wrongAnswerDiv = document.createElement("div");
const wrongAnswerText = document.createElement("p");
wrongAnswerDiv.appendChild(wrongAnswerText);

overlayMessageDiv.classList.add("overlayMessageDiv");
victoryMessageDiv.classList.add("victoryMessageDiv");
victoryMessageText.classList.add("victoryMessageText");
correctAnswerText.classList.add("correctAnswerText");
img.classList.add("mogelostenFinalPage");

wrongAnswerDiv.classList.add("wrongAnswerDiv");
wrongAnswerText.classList.add("wrongAnswerText");

nextBtn.classList.add("actionButtons");
nextBtn.id = "nextButton";
nextBtn.textContent = "NEXT REBUS";

let currentIndex = 0;
let revealTracker = 0;
let finishedTracker = 0;
let hintTracker = 0;
let wasRevealed = false;
let hintsLeft = 2;
let revealsLeft = 2;

hintTrackerForUser.textContent = `Hints left: ${hintsLeft}`;
revealTrackerForUser.textContent = `Reveals left: ${revealsLeft}`;

function checkAnswer() {

    if (revealTracker === 1) {
        revealBtn.disabled = false;
    }

    if (phoneDiv.contains(wrongAnswerDiv)) {
        phoneDiv.removeChild(wrongAnswerDiv);
    }
    const inputs = document.querySelectorAll(".inputBox");
    let userGuess = "";

    inputs.forEach(input => {
        userGuess += input.value;

        console.log(userGuess, "användarens gissning")
    });

    userGuess = userGuess.toLowerCase()

    if (userGuess === rebusArray[currentIndex].correctAnswer) {
        console.log("Rätt!")
        console.log(currentIndex);

        currentIndex++

        if (wasRevealed) {
            getNewImages();
            checkHintAndRevealTrackers();
        } else {
            getVictoryOverlay();
        }

    }
    else {
        getFailureMessage();
    }
}

function getFinishedPage() {
    console.log("HEEEEJJ");
    phoneDiv.innerHTML = "";

    img.src = "../bilder/glad_mogelost.png";

    const excitedMessage = document.createElement("p");
    const finishMessage1 = document.createElement("p");
    const finishMessage2 = document.createElement("p");
    finishMessage1.textContent = "YES!! Thank you, you´re the best!"
    finishMessage2.textContent = "Ehm, uh I mean thanks I guess..."


    phoneDiv.appendChild(finishMessage1, img);
}

function getVictoryOverlay() {

    victoryMessageText.textContent = "CORRECT!";
    correctAnswerText.textContent = `The answer was: ${rebusArray[currentIndex].correctAnswer}`;
    victoryMessageDiv.appendChild(victoryMessageText);
    overlayMessageDiv.appendChild(victoryMessageDiv);
    overlayMessageDiv.appendChild(nextBtn);
    body.appendChild(overlayMessageDiv);
}

function removeVictoryOverlay() {
    overlayMessageDiv.innerHTML = "";
    body.removeChild(overlayMessageDiv);
}

function getFailureMessage() {
    console.log("feeeel")
    phoneDiv.insertBefore(wrongAnswerDiv, actionsButtonsDiv)
    wrongAnswerText.textContent = "Not quite, try again!";
}

function getHint() {

    hintTracker++

    hintsLeft--;
    hintTrackerForUser.textContent = `Hints left: ${hintsLeft}`;
    const hintText = document.createElement("span");
    const hintSpan = document.createElement("span");

    hintSpan.classList.add("hintMessage");
    hintText.classList.add("hintMessage");
    hintText.id = "hintText";
    hintSpan.id = "hintSpan";
    hintText.textContent = rebusArray[currentIndex].hint;
    hintSpan.textContent = "HINT: "

    hintSpan.appendChild(hintText);
    gamingArea.appendChild(hintSpan);
}

function revealAnswer() {

    revealBtn.disabled = true;
    hintBtn.disabled = true;
    revealTracker++

    revealsLeft--;
    revealTrackerForUser.textContent = `Reveals left: ${revealsLeft}`;

    console.log("vi ska reveala svaret!");
    console.log(revealTracker, " revealTracker borde vara större än 0");
    console.log(revealTracker, `${revealTracker} använda av max 2 reveals`);

    wasRevealed = true;

    if (revealTracker > 0) {
        const inputBoxesList = document.querySelectorAll(".inputBox");

        inputBoxesList.forEach((box, index) => {

            if (index < rebusArray[currentIndex].correctAnswer.length) {
                box.value = rebusArray[currentIndex].correctAnswer[index];
            }
        });

        guessBtn.textContent = "Next rebus";
    }
}

function getInputBoxes(rebus) {

    answerSection.innerHTML = "";
    const allInputBoxes = [];

    for (let i = 0; i < rebus.correctAnswer.length; i++) {
        const inputBox = document.createElement("input");
        inputBox.maxLength = 1;
        inputBox.classList.add("inputBox");

        inputBox.addEventListener("input", function () {
            if (this.value.length === 1) {
                const nextInput = this.nextElementSibling;
                if (nextInput && nextInput.classList.contains("inputBox")) {
                    nextInput.focus();
                }
            }
        });

        answerSection.appendChild(inputBox);
        allInputBoxes.push(inputBox);
    }

    if (allInputBoxes.length > 0) {
        allInputBoxes[0].focus();
    }
}

function getNewImages() {

    checkHintAndRevealTrackers();
    guessBtn.textContent = "Guess";

    const currentRebus = rebusArray[currentIndex];

    if (currentIndex === 6) {
        finishedTracker = currentIndex;
        getFinishedPage();
    }

    if (currentIndex === 3) {
        getAgnetaMessage();
    }

    img1.src = currentRebus.word1;
    console.log(img1.src, "första bilden i iterationen")
    img2.src = currentRebus.word2;
    console.log(img2.src, "andra bilden i iterationen");

    getInputBoxes(currentRebus)
}

nextBtn.addEventListener("click", () => {
    console.log("12345")
    if (finishedTracker === 6) {
        getFinishedPage();
    }
    hintBtn.disabled = false;
    revealBtn.disabled = false;
    getNewImages();
    removeVictoryOverlay();

})

function checkHintAndRevealTrackers() {
    if (hintTracker >= 2) {
        hintBtn.disabled = true;
    } else {
        hintBtn.disabled = false;
    }

    if (revealTracker >= 2) {
        revealTracker.disabled = true;
    } else {
        revealTracker.disabled = false;
    }
}

function getAgnetaMessage() {
    const AgnetaMessage = document.createElement("p");
    AgnetaMessage.classList.add("AgnetaMessage");
    AgnetaMessage.textContent = "Hurry up! Agneta is already one rebus ahead of you!";

    phoneDiv.appendChild(AgnetaMessage);

    setTimeout(() => {
        AgnetaMessage.remove();
    }, 5000);
}

function rebusIntroductionPage() {

}

guessBtn.addEventListener("click", () => {
    console.log(revealTracker, "12345")

    const hintSpanElementsToRemove = document.querySelectorAll(".hintMessage");
    console.log(hintSpanElementsToRemove, "span-element som ska tas bort inför nästa rebus")
    hintSpanElementsToRemove.forEach(span => span.remove());
    checkAnswer();
})

hintBtn.addEventListener("click", () => {
    hintBtn.disabled = true;
    getHint();
})

revealBtn.addEventListener("click", () => {
    console.log("Jag vill veta svaret!");
    revealAnswer();
})



getNewImages();
checkHintAndRevealTrackers()