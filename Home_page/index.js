// let inputBox = document.getElementById("input__comment__box")
// inputBox.addEventListener('click',commentbox);

// function commentbox(){
//     right__data__activities.style.display = "none"
//     comment__box.style.display = "block"   
// }
let activities = document.getElementById("activities");
let friends = document.getElementById("friends")
let challenges = document.getElementById("challenges");
let groups = document.getElementById("groups")


friends.addEventListener('click', friendsDiv)
function friendsDiv(e){
    e.preventDefault()
    friends.style.color = "#2C479B"
    challenges.style.color = "#51AADE"
    groups.style.color = "#51AADE"
    activities.style.color = "#51AADE"
    comment__box.style.display = "none" 
    right__friends.style.display = "block";
    right__friends.style.backgroundColor= "white"
    addGroups.style.display = "none"
    addChallenges.style.display = "none"
}

challenges.addEventListener('click', challengesDiv)
function challengesDiv(e){
    e.preventDefault()
    friends.style.color = "#51AADE"
    challenges.style.color = "#2C479B"
    groups.style.color = "#51AADE"
    activities.style.color = "#51AADE"
    comment__box.style.display = "none" 
    right__friends.style.display = "none";
    addGroups.style.display = "none"
    addChallenges.style.backgroundColor= "white"
    addChallenges.style.display = "block"
}

groups.addEventListener('click', groupsDiv)
function groupsDiv(e){
    e.preventDefault()
    friends.style.color = "#51AADE"
    challenges.style.color = "#51AADE"
    groups.style.color = "#2C479B"
    activities.style.color = "#51AADE"
    comment__box.style.display = "none" 
    right__friends.style.display = "none";
    addChallenges.style.display = "none"
    addGroups.style.display = "block"
    addGroups.style.backgroundColor= "white"
}

showTask();

var addTaskInput = document.getElementById("textarea");
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
        html +=` <div class="commentList">
        <img id="profileImg" src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="profile_pic">
        <p class="row__comment">${item.task_name}</p>
        <button id="deletComnt" onClick = "deletItem(${index})">x</button>
    </div>`
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

