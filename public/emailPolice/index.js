const textContainer = document.querySelector("#textContainer");
const textArea = document.querySelector("textArea");

const signs = [".", ",", "!", "?", "+", "-", ";", ":"]
const checkLength = []
function sendEmail() {
    if(!textArea.value){
        alert("Fält får inte lämnas tom")
        return
    }

    for (let x of textArea.value.split(" ")){
        if(!signs.includes(x)){
            checkLength.push(x)
        }
    }

    if(checkLength.length < 10){
        alert("Skriv minst 10 ord")
    }
}


// -------------------------- TEXT ---------------------------
let count = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeOutSlowly(words) {
    const div = document.createElement("div");
    textContainer.appendChild(div);
    div.style.whiteSpace = "pre-wrap"; 

    for (const word of words) {
        for (const letter of word) {
            div.textContent += letter

            if (letter === "." || letter === "...") {
                div.textContent += "\n";
                await sleep(300);
            } else {
                await sleep(30);
            }
        }

        const space = document.createElement("span");
        space.textContent = " ";
        div.appendChild(space);

        await sleep(100);
    }
}

window.addEventListener("keydown", async(event) => {
    if (event.key === "Enter" && count == 0){
        count++
        // await typeOutSlowly(["FRÅN:", "Anonym_Källa_82"])
        // await typeOutSlowly(["TILL:", "[REDAKTIONEN]"])
        // await typeOutSlowly(["ÄMNE:", "Det som döljer sig under betongen..."])
        await typeOutSlowly(text.split(" "))
    }
})

let text = "Rapportera läget tillbaka till din chef. Skriv ett mejl om vad du såg."
