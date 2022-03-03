let tasksList = document.getElementById("tasks-list");
let taskForm = document.getElementById("task-form");
let addTaskBtn = document.getElementById("add-task");
let tasks = ["task"];
let count = 0;
let tasksString = ``;



// function addTaskFunc() {
//     viewFormFunc();
// }

function viewTasksFunc() {
    taskForm.style.display = "none"
    addTaskBtn.style.display = "block"
    for(i = 0; i< tasks.length; i++) {
        tasksString += `<li>${tasks[i]}</li>` 
    }
    tasksList.innerHTML = tasksString;
    tasksString = ``;
}

function viewFormFunc(){
    taskForm.style.display = "block"
    addTaskBtn.style.display = "none"
}