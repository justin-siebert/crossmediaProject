const body = document.getElementById("guessTheWord"); // hela diven som innehåller spelet
const enterButton = document.getElementById("confirmLetter");
const guessedLetterInput = document.getElementById("guessedLetter"); // INPUT
const gamingArea = document.getElementById("gamingArea") // Visar divar
const wrongLetter = document.getElementById("wrongLetter")

let password = "bonollett"
let arrayOfDiv = createGameField()

function createGameField () {
    let boxes = []
    for (let l of password){
        const div = document.createElement("div")
        div.style.border = "2px solid black"
        div.style.padding = "3px"
        div.style.height = "20px"
        div.style.width = "20px"
        div.textContent = ""
        boxes.push(div)
        gamingArea.appendChild(div)
    }
    return boxes
}

function checkInput(inputValue) {
    if (inputValue.length === 1 && isNaN(inputValue)){
        console.log("Enter funkar")
        return inputValue         
    } 
    return false
}

function checkLetter(letter) {

    if (!password.includes(letter)){
        wrongLetter.textContent += letter
    }
    

    for (let i = 0; i < password.length; i++) {
        if (password[i] === letter) {
            arrayOfDiv[i].textContent = letter;
        }
    }

    
}

enterButton.addEventListener("click", () => {
    const value = guessedLetterInput.value.toLowerCase();
    const letter = checkInput(value);

    if (!letter) return;

    checkLetter(letter);
    guessedLetterInput.value = "";
});


console.log(arrayOfDiv)

// ---------- STYLE ----------
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center "
body.style.height = "100px"
body.style.flexDirection = "column"

gamingArea.style.display = "flex"
gamingArea.style.gap = "5px"
wrongLetter.style.height = "20px"