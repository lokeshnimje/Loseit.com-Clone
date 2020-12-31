// showTask();


// document.window.addEventListener('onload', showTask)
window.addEventListener('load', showTask)

function showTask() {
    var task = localStorage.getItem("localtask");
    console.log(task)
    if (task == null){
        taskObj = []
    } else {
        taskObj = JSON.parse (task);
    }
    console.log(taskObj)
    var html = "";
    var taskList = document.getElementById("comment__list");
    taskObj.forEach(function(item, index) {
        html +=` <div class="row">
        <img src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="profileImage" id="profileImg">
        <p>${item.task_name}</p>
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

