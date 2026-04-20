const memoryContainer = document.getElementById("memoryContainer")
const colors = ["blue", "green", "red", "yellow", "tomato", "beige", "aqua", "purple", "pink", "orange", "violet"];

function createDiv (){
    let blocks = []
    for (let block of colors){
        const div = document.createElement("div")
        div.style.backgroundColor = block
        div.classList.add("block", "flipped")
        div.textContent = block

        blocks.push(div)
    }

    return blocks
}

function randomDoubleColor (){
    const color = colors[Math.floor(Math.random() * colors.length)]
    const div = document.createElement("div")
    div.style.backgroundColor = color
    div.classList.add("block", "flipped")
    div.textContent = color

    return div
}

let allblocks = createDiv()
const doubleColor = randomDoubleColor()
allblocks.push(doubleColor)

for (let div of allblocks){
    memoryContainer.appendChild(div)
    div.addEventListener("click", (event) => {
        if (event.target) {
            div.style.backgroundColor = div.textContent
            div.classList.toggle("flipped")

        }
    })
}


console.log(allblocks)

