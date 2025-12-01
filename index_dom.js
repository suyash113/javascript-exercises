const container = document.querySelector("#container")

const content = document.createElement("div")
content.classList.add("content")
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("p")
red.classList.add("red")
red.textContent = "Hey I’m red!"
container.appendChild(red)

const blue = document.createElement("h3")
blue.classList.add("blue")
blue.textContent = "Hey I’m blue!"
container.appendChild(blue)

const designerDiv = document.createElement("div")
designerDiv.classList.add("designerDiv")
designerDiv.style.border = "5px solid black"
designerDiv.style.background = "pink"
designerDiv.style.padding = "10px"

const newh1 = document.createElement("h1")
newh1.classList.add("newh1")
newh1.textContent = "I'm in div"
designerDiv.appendChild(newh1)


const newp = document.createElement("p")
newp.classList.add("neewp")
newp.textContent = "Mee Too!"
designerDiv.appendChild(newp)

container.appendChild(designerDiv)

const button = document.querySelector("#btn")

button.addEventListener("click", ()=> {
    const newp2 = document.createElement("p")
    newp2.textContent = "I am New"
    container.appendChild(newp2)
})