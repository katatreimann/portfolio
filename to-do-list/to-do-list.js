// const comment = document.getElementById("addToList");

// function myFunction(){
//     let comment = document.getElementById("addToList").value

//    data = "addToList"
   
//    document.getElementById("data").innerHTML = data 
//    }

const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

function addTask(event) {
    event.preventDefault()
    
    const task = document.createElement("li")
    task.classList.add("task")

    const taskCheckbox = document.createElement("input")
    taskCheckbox.type = "checkbox"

    const taskContent = document.createElement("input")
    taskContent.type = "text"
    taskContent.value = taskInput.value

    function removeTask() {
        taskList.removeChild(task)
    }

    const taskDeleteButton = document.createElement("button")
    taskDeleteButton.textContent = "x"
    taskDeleteButton.addEventListener("click", removeTask)

    task.appendChild(taskCheckbox)
    task.appendChild(taskContent)
    task.appendChild(taskDeleteButton)

    taskList.appendChild(task)

    taskForm.reset()

}

taskForm.addEventListener("submit", addTask)