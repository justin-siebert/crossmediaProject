
const clickMessage = document.createElement("p");
const microphone = document.querySelector("#microphoneImg");
const successText = document.createElement("p");
const br = document.createElement("br");
const phoneDiv = document.querySelector(".phone");


successText.classList.add("textStyling");
clickMessage.classList.add("textStyling");
clickMessage.textContent = "Klicka på mikrofonen!";

phoneDiv.prepend(clickMessage);

microphone.addEventListener("click", () => {
    microphone.classList.add("moveIntoStone");

    successText.textContent = "En riktig rackare är du! Är här de nästa koordinaterna som du behöver för att ta dig vidare:"
    successText.appendChild(br);

    successText.append("55.611321, 12.973578");

    setTimeout(() => {
        phoneDiv.appendChild(successText);
    }, 1000);
})