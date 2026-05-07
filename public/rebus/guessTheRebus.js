const rebusArray = [
    {
        word1: "../bilder/emojies/pine-tree.png",
        word2: "../bilder/emojies/apple.png",
        correctAnswer: "pineapple"

    },
    {
        word1: "../bilder/emojies/butter.png",
        word2: "../bilder/emojies/fly.png",
        correctAnswer: "butterfly"

    },
    {
        word1: "../bilder/emojies/fire.png",
        word2: "../bilder/emojies/golden-retriever.png",
        correctAnswer: "hotdog"

    },
    {
        word1: "../bilder/emojies/pagophagia.png",
        word2: "../bilder/emojies/smiley.png",
        correctAnswer: "ice cream"

    },
    {
        word1: "../bilder/emojies/sunny.png",
        word2: "../bilder/emojies/flower.png",
        correctAnswer: "sunflower"

    },
    {
        word1: "../bilder/emojies/stack-of-books.png",
        word2: "../bilder/emojies/worm.png",
        correctAnswer: "bookworm"

    },
    {
        word1: "../bilder/emojies/construction-and-tools.png",
        word2: "../bilder/emojies/package.png",
        correctAnswer: "sandbox"

    }
]

//fixa lika många svarsrutor som antal bokstäver i correctAnswer
//fixa loop för att få ut emojies

const gamingArea = document.querySelector(".gamingArea");
const guessTheRebus = document.querySelector(".guessTheRebus");
const plusSign = document.createElement("p");
const img1 = document.querySelector("#rebusImage1");
const img2 = document.querySelector("#rebusImage2");
const answerSection = document.querySelector(".answerSection");
const guessBtn = document.querySelector("#guessButton");

let currentIndex = 0;

guessBtn.addEventListener("click", checkAnswer() {

})

function checkAnswer() {
    const inputs = document.querySelectorAll(".inputBox");
    let userGuess = "";

    inputs.forEach(input => {
        userGuess += input.value;
        userGuess.toLowerCase()
    });

    if (userGuess === rebusArray[currentIndex].correctAnswer) {
        console.log("Rätt!")
    } else {
        console.log("Fel!")
    }
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



updateImages();


