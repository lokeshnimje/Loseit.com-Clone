window.addEventListener('load', showTask)
showTask();

var addTaskInput = document.getElementById("input");
var addTaskButton = document.getElementById("share");

addTaskButton.addEventListener("click", function(){
    var addTaskInputValue = addTaskInput.value;
    if (addTaskInputValue.trim()){
        var task = localStorage.getItem("localtask");
        if (task == null) {
            taskObj = [];
        } else {
            taskObj = JSON.parse(task);
        }
        taskObj.push({task_name: addTaskInputValue});
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        addTaskInput.value = "";
    }
    showTask();
});

function showTask() {
    var task = localStorage.getItem("localtask");
    if (task == null){
        taskObj = []
    } else {
        taskObj = JSON.parse (task);
    }
    var html = "";
    var taskList = document.getElementById("taskList");
    taskObj.forEach(function(item, index) {
        html +=`<div class="row">
                 <img src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="profileImage" id="profileImg">
                 <p>${item.task_name}</p>
                 <button id="deletComnt" onClick = "deletItem(${index})">x</button>
             </div> `
    })
    taskList.innerHTML = html;
}
function deletItem(index){
    var task = localStorage.getItem("localtask");
    var taskObj = JSON.parse(task);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();
}

let invitation = document.getElementById("invitation__menu")
let invitation_tag = document.getElementById("invitation")
let notification = document.getElementById("notification__menu")
let notification_tag = document.getElementById("notification")

invitation.addEventListener('click',invitation_page);
function invitation_page(e){
    e.preventDefault()
    mid__activity.style.display = "none";
    invitation_tag.style.display = "block";   
    right.style.display = "none";
    notification_tag.style.display = "none"
    activity__menu.style.color = "#155c88"
    invitation__menu.style.color = "purple"
    notification__menu.style.color = "#155c88"
}

notification.addEventListener('click',notification_page);
function notification_page(e){
    e.preventDefault()
    mid__activity.style.display = "none";
    invitation_tag.style.display = "none";   
    right.style.display = "none";
    notification_tag.style.display = "block"
    activity__menu.style.color = "#155c88"
    invitation__menu.style.color = "#155c88"
    notification__menu.style.color = "purple"
}

