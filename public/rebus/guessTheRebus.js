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
        hint: "A glowing insect at night"

    },
    {
        word1: "../bilder/emojies/fire.png",
        word2: "../bilder/emojies/golden-retriever.png",
        correctAnswer: "hotdog",
        hint: "A popular food at baseball games"

    },
    {
        word1: "../bilder/emojies/pagophagia.png",
        word2: "../bilder/emojies/smiley.png",
        correctAnswer: "ice cream",
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
        word1: "../bilder/emojies/construction-and-tools.png",
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

const overlayMessageDiv = document.createElement("div");
const victoryMessageDiv = document.createElement("div");
const victoryMessageText = document.createElement("p");
const correctAnswerText = document.createElement("p");

const wrongAnswerDiv = document.createElement("div");
const wrongAnswerText = document.createElement("p");
wrongAnswerDiv.appendChild(wrongAnswerText);

overlayMessageDiv.classList.add("overlayMessageDiv");
victoryMessageDiv.classList.add("victoryMessageDiv");
victoryMessageText.classList.add("victoryMessageText");
correctAnswerText.classList.add("correctAnswerText");

wrongAnswerDiv.classList.add("wrongAnswerDiv");
wrongAnswerText.classList.add("wrongAnswerText");

nextBtn.classList.add("actionButtons");
nextBtn.id = "nextButton";
nextBtn.textContent = "NEXT REBUS";

let currentIndex = 0;
let revealTracker = 2;

function checkAnswer() {
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
        currentIndex++

        getVictoryOverlay();
    } else {
        getFailureMessage();
    }
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

function getInputBoxes(rebus) {

    answerSection.innerHTML = "";

    for (let i = 0; i < rebus.correctAnswer.length; i++) {
        const inputBox = document.createElement("input");
        inputBox.classList.add("inputBox");

        answerSection.appendChild(inputBox);
    }
}

function updateImages() {

    const currentRebus = rebusArray[currentIndex];

    img1.src = currentRebus.word1;
    console.log(img1.src, "första bilden i iterationen")
    img2.src = currentRebus.word2;
    console.log(img2.src, "andra bilden i iterationen");

    getInputBoxes(currentRebus)
}

nextBtn.addEventListener("click", () => {
    console.log("Nu trycks det på next-knappen!");
    hintBtn.disabled = false;
    revealBtn.disabled = false;
    updateImages();
    removeVictoryOverlay();

    const hintSpanElementsToRemove = document.querySelectorAll(".hintMessage");
    if (hintSpanElementsToRemove) {
        hintSpanElementsToRemove.forEach(span => {
            gamingArea.removeChild(span);
        })
    }
})

guessBtn.addEventListener("click", () => {
    console.log("Nu trycks det på guess-knappen!")
    checkAnswer();
})

hintBtn.addEventListener("click", () => {
    console.log("Jag behöver en hint tack!");
    hintBtn.disabled = true;
    getHint();

})

revealBtn.addEventListener("click", () => {
    console.log("Jag vill veta svaret!");
    revealBtn.disabled = true;
})


updateImages();


