// button --> click event
const AddButton = document.querySelector("button")
const InputBox = document.querySelector("input")
const MyDiv = document.querySelector("div")

AddButton.addEventListener("click", function()
{
    // Logic to collect the task that is present in input
    // box
    let enteredTask = InputBox.value//Playing
    let createdLi = document.createElement("li")
    createdLi.innerHTML = 
    `${enteredTask} <i class="fa-solid fa-trash"></i>`
    MyDiv.append(createdLi)

    InputBox.value = ""

    const DeleteIcon = createdLi.querySelector("i")
    DeleteIcon.addEventListener("click", function()
    {
        // Logic to ddelete the task
        createdLi.remove()
    })
})