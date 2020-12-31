
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
=======

document.getElementById("foodType").addEventListener("click", function(){
let display = document.getElementById("dropdown__food").style.display
let display_state
if(display == "none"){
    display_state = "block"
} else{
    display_state = "none"
}
document.getElementById("dropdown__food").style.display = display_state
})

document.getElementById("close").addEventListener("click", function(){
    popup.style.display = "none"
})

let popup = document.getElementById("pop_up")
document.getElementById("breakfast_list").addEventListener("click", function(){
    popup.style.display = "block"
    document.getElementById("find_all_breakfast").style.display = "block"
    document.getElementById("search_breakfast").style.display = "block"
    document.getElementById("exer_menu").style.display = "none"
    document.getElementById("food_menu").style.display = "flex"
})

document.getElementById("lunch_list").addEventListener("click", function(){
    popup.style.display = "block"
    document.getElementById("find_all_lunch").style.display = "block"
    document.getElementById("search_lunch").style.display = "block"
    document.getElementById("exer_menu").style.display = "none"
    document.getElementById("food_menu").style.display = "flex"
})

document.getElementById("dinner_list").addEventListener("click", function(){
    popup.style.display = "block"
    document.getElementById("find_all_dinner").style.display = "block"
    document.getElementById("search_dinner").style.display = "block"
    document.getElementById("exer_menu").style.display = "none"
    document.getElementById("food_menu").style.display = "flex"
})

// for breakfast 

document.getElementById("find_all_breakfast").addEventListener("click", addBreakfast)

let table = document.getElementById("table")
let break_obj = []

function addBreakfast(){
    let data = JSON.parse(localStorage.getItem("breakfasts"))
    let break_data = ""
    for (i in data){
        break_data += ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${data[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${data[i].name}</td>
                        <td>${data[i].calories} cal</td>
                        <td>${data[i].protein} g</td>
                        <td><button onclick = addFood(${data[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>
                      `       
                      
    }
    table.innerHTML = break_data
}
let arr = []
let out = ""

function breakfast_list_item(){
    let cart = JSON.parse(localStorage.getItem("breakfast_cart"))
  
    for (i in cart){
        arr.push(cart[i])
    }
    
    if (cart != null || cart == []){
        document.getElementById("breakfast_table").style.display = "block"
        document.getElementById("breakfast_para").style.display = "none"
    }
    for (i in cart){
            out += `<tr class = "table_row input_content">
                    <td style = "padding-right:2px; padding-left:0"><img src =${cart[i].img} /></td>
                    <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                    <td>${cart[i].calories} cal</td>
                    <td>${cart[i].protein} g</td>
                    <td><button onclick = "deleteItem(${cart[i].id})" class = "close_btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                    </tr>`
                 }        
    document.getElementById("breakfast_table").innerHTML = out
}
breakfast_list_item()

function addFood(id){
    let data = JSON.parse(localStorage.getItem("breakfasts"))


    document.getElementById("breakfast_table").style.display = "block"
    document.getElementById("breakfast_para").style.display = "none"
    
    let list = {}
    let name = data[id].name
    let img = data[id].img
    let cal = data[id].calories
    let pro = data[id].protein
    list.name = name;
    list.img = img;
    list.calories = cal;
    list.protein = pro;
    arr.push(list)

    localStorage.setItem("breakfast_cart", JSON.stringify(arr))
    let cart = JSON.parse(localStorage.getItem("breakfast_cart"))
    out = ""
    let break_id;
        for (i in cart){
            out += `<tr class = "table_row input_content" id = "${cart[i].name}">
                    <td style = "padding-right:2px; padding-left:0"><img src =${cart[i].img} /></td>
                    <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                    <td>${cart[i].calories} cal</td>
                    <td>${cart[i].protein} g</td>
                    <td><button onclick = "deleteItem(${cart[i].id},${cart[i].name})" class = "close_btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                    </tr>`
                 }        
    document.getElementById("breakfast_table").innerHTML = out
}

function deleteItem(id){
    let cart = JSON.parse(localStorage.getItem("breakfast_cart"))
    cart.splice(id,1)
    localStorage.removeItem("breakfast_cart")
    localStorage.setItem("breakfast_cart",JSON.stringify(cart))
    location.reload()
}

document.getElementById("search_breakfast").addEventListener("click", function(){
    let value = document.getElementById("input_breakfast").value
    let cart = JSON.parse(localStorage.getItem("breakfasts"))
    let search_data = ""
    for (i in cart){
        if(value.toLowerCase() == cart[i].name.toLowerCase()){
             search_data = ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                        <td>${cart[i].calories} cal</td>
                        <td>${cart[i].protein} g</td>
                        <td><button onclick = addFood(${cart[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`        
            break;
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data
})

document.getElementById("enter_breakfast").addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        popup.style.display = "block"
    let value = document.getElementById("enter_breakfast").value
    let cart = JSON.parse(localStorage.getItem("breakfasts"))
    let search_data = ""
    for (i in cart){
        if(value.toLowerCase() == cart[i].name.toLowerCase()){
             search_data += ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                        <td>${cart[i].calories} cal</td>
                        <td>${cart[i].protein} g</td>
                        <td><button onclick = addFood(${cart[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`     
             break;   
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data

    }
})

// document.getElementById("my_food").addEventListener("click", function(){
//     let cart = JSON.parse(localStorage.getItem("breakfast_cart"))
//     console.log(cart.length)
//     let my_breakfast = "";
//     for (i in cart){
//         if (cart.length != 0){
//             my_breakfast += ` <tr class = "table_row">
//                         <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
//                         <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
//                         <td>${cart[i].calories} cal</td>
//                         <td>${cart[i].protein} g</td>
//                         <td><button onclick = addFood(${id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
//                         </tr>` 
//         } else {
//             my_breakfast = "Cart is empty"
//             console.log("working")
//         }
//     }
    
//     table.innerHTML = my_breakfast
// })


// js for Lunch menu

document.getElementById("find_all_lunch").addEventListener("click", function(){
    let data = JSON.parse(localStorage.getItem("lunchs"))
    let lunch_data = ""
    let id;
    for (i in data){
        lunch_data += ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${data[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${data[i].name}</td>
                        <td>${data[i].calories} cal</td>
                        <td>${data[i].protein} g</td>
                        <td><button onclick = addLunch(${data[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>
                      `       
    }
    table.innerHTML = lunch_data
})

let lunch_arr = []
let lunch_out = ""
function addLunch(id){
    
    let data = JSON.parse(localStorage.getItem("lunchs"))

    document.getElementById("lunch_table").style.display = "block"
    document.getElementById("lunch_para").style.display = "none"
    
    let list = {}
    let name = data[id].name
    let img = data[id].img
    let cal = data[id].calories
    let pro = data[id].protein
    list.name = name;
    list.img = img;
    list.calories = cal;
    list.protein = pro;
    lunch_arr.push(list)

    localStorage.setItem("lunch_cart", JSON.stringify(lunch_arr))
    let cart = JSON.parse(localStorage.getItem("lunch_cart"))
    lunch_out = ""
        for (i in cart){
            lunch_out += `<tr class = "table_row input_content" id = "${cart[i].name}">
                    <td style = "padding-right:2px; padding-left:0"><img src =${cart[i].img} /></td>
                    <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                    <td>${cart[i].calories} cal</td>
                    <td>${cart[i].protein} g</td>
                    <td><button onclick = "deleteLunchItem(${data[i].id},${cart[i].name})" class = "close_btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                    </tr>`
                 }        
    document.getElementById("lunch_table").innerHTML = lunch_out
}

function lunch_list_item(){
    let cart = JSON.parse(localStorage.getItem("lunch_cart"))
  
    for (i in cart){
        lunch_arr.push(cart[i])
    }
    
    if (cart != null || cart == "[]"){
        document.getElementById("lunch_table").style.display = "block"
        document.getElementById("lunch_para").style.display = "none"
    }
    for (i in cart){
            lunch_out += `<tr class = "table_row input_content">
                    <td style = "padding-right:2px; padding-left:0"><img src =${cart[i].img} /></td>
                    <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                    <td>${cart[i].calories} cal</td>
                    <td>${cart[i].protein} g</td>
                    <td><button onclick = "deleteLunchItem(${cart[i].id})" class = "close_btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                    </tr>`
                 }        
    document.getElementById("lunch_table").innerHTML = lunch_out
}
lunch_list_item()

function deleteLunchItem(id){
    let cart = JSON.parse(localStorage.getItem("lunch_cart"))
    cart.splice(id,1)
    localStorage.removeItem("lunch_cart")
    localStorage.setItem("lunch_cart",JSON.stringify(cart))
    location.reload()
}


document.getElementById("search_lunch").addEventListener("click", function(){
    let value = document.getElementById("input_breakfast").value
    let cart = JSON.parse(localStorage.getItem("lunchs"))
    let search_data = ""
    for (i in cart){
        if(value.toLowerCase() == cart[i].name.toLowerCase()){
             search_data = ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                        <td>${cart[i].calories} cal</td>
                        <td>${cart[i].protein} g</td>
                        <td><button onclick = addLunch(${data[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`        
            break;
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data
})

document.getElementById("enter_lunch").addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        popup.style.display = "block"
    let value = document.getElementById("enter_lunch").value
    let cart = JSON.parse(localStorage.getItem("lunchs"))
    let search_data = ""
    for (i in cart){
        if(value.toLowerCase() == cart[i].name.toLowerCase()){
             search_data = ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                        <td>${cart[i].calories} cal</td>
                        <td>${cart[i].protein} g</td>
                        <td><button onclick = addLunch(${cart[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`     
             break;   
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data

    }
})

// js for dinner menu


document.getElementById("find_all_dinner").addEventListener("click", function(){
    let data = JSON.parse(localStorage.getItem("dinner"))
    let dinner_data = ""
    for (i in data){
        dinner_data += ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${data[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${data[i].name}</td>
                        <td>${data[i].calories} cal</td>
                        <td>${data[i].protein} g</td>
                        <td><button onclick = addDinner(${data[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>
                      `       
    }
    table.innerHTML = dinner_data
})

let dinner_arr = []
let dinner_out = ""
function addDinner(id){
    let data = JSON.parse(localStorage.getItem("dinner"))

    document.getElementById("dinner_table").style.display = "block"
    document.getElementById("dinner_para").style.display = "none"
    let list = {}
    let name = data[id].name
    let img = data[id].img
    let cal = data[id].calories
    let pro = data[id].protein
    list.name = name;
    list.img = img;
    list.calories = cal;
    list.protein = pro;
    dinner_arr.push(list)

    localStorage.setItem("dinner_cart", JSON.stringify(dinner_arr))
    let cart = JSON.parse(localStorage.getItem("dinner_cart"))
    dinner_out = ""
    let dinner_id;
        for (i in cart){
            dinner_out += `<tr class = "table_row input_content" id = "${cart[i].name}">
                    <td style = "padding-right:2px; padding-left:0"><img src =${cart[i].img} /></td>
                    <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                    <td>${cart[i].calories} cal</td>
                    <td>${cart[i].protein} g</td>
                    <td><button onclick = "deleteLunchItem(${data[i].id},${cart[i].name})" class = "close_btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                    </tr>`
                 }        
    document.getElementById("dinner_table").innerHTML = dinner_out
}

function dinner_list_item(){
    let cart = JSON.parse(localStorage.getItem("dinner_cart"))
  
    for (i in cart){
        dinner_arr.push(cart[i])
    }
    
    if (cart != null || cart == "[]"){
        document.getElementById("dinner_table").style.display = "block"
        document.getElementById("dinner_para").style.display = "none"
    }
    for (i in cart){
            dinner_out += `<tr class = "table_row input_content">
                    <td style = "padding-right:2px; padding-left:0"><img src =${cart[i].img} /></td>
                    <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                    <td>${cart[i].calories} cal</td>
                    <td>${cart[i].protein} g</td>
                    <td><button onclick = "deleteDinnerItem(${cart[i].id})" class = "close_btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                    </tr>`
                 }        
    document.getElementById("dinner_table").innerHTML = dinner_out
}
dinner_list_item()

function deleteDinnerItem(id){
    let cart = JSON.parse(localStorage.getItem("dinner_cart"))
    cart.splice(id,1)
    localStorage.removeItem("dinner_cart")
    localStorage.setItem("dinner_cart",JSON.stringify(cart))
    location.reload()
}


document.getElementById("search_dinner").addEventListener("click", function(){
    let value = document.getElementById("input_breakfast").value
    let cart = JSON.parse(localStorage.getItem("dinner"))
    let search_data = ""
    for (i in cart){
        if(value.toLowerCase() == cart[i].name.toLowerCase()){
             search_data = ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                        <td>${cart[i].calories} cal</td>
                        <td>${cart[i].protein} g</td>
                        <td><button onclick = addDinner(${cart[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`        
            break;
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data
})

document.getElementById("enter_dinner").addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        popup.style.display = "block"
    let value = document.getElementById("enter_dinner").value
    let cart = JSON.parse(localStorage.getItem("dinner"))
    let search_data = "";
    for (i in cart){
        if(value.toLowerCase() == cart[i].name.toLowerCase()){
             search_data = ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                        <td>${cart[i].calories} cal</td>
                        <td>${cart[i].protein} g</td>
                        <td><button onclick = addDinner(${cart[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`     
             break;   
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data

    }
})

// Exercise Button
document.getElementById("exercise_btn").addEventListener("click", function(){
    popup.style.display = "block"
    document.getElementById("exer_menu").style.display = "flex"
    document.getElementById("food_menu").style.display = "none"
    document.getElementById("find_all_exercise").style.display = "block"
    document.getElementById("search_exercise").style.display = "block"
})

document.getElementById("find_all_exercise").addEventListener("click", function(){
    let data = JSON.parse(localStorage.getItem("exercises"))
    let exercise_data = ""
    for (i in data){
        exercise_data += ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${data[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${data[i].name}</td>
                        <td>${data[i].cal} cal</td>
                        <td>${data[i].protein}</td>
                        <td><button onclick = addExercise(${data[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>
                      `       
    }
    table.innerHTML = exercise_data
})

let exercise_arr = []
let exercise_out = ""
function addExercise(id){
    
    let data = JSON.parse(localStorage.getItem("exercises"))

    document.getElementById("exercise_table").style.display = "block"
    document.getElementById("exercise_para").style.display = "none"
    
    let list = {}
    let name = data[id].name
    let img = data[id].img
    let cal = data[id].cal
    let pro = data[id].protein
    list.name = name;
    list.img = img;
    list.cal = cal;
    list.protein = pro;
    exercise_arr.push(list)

    localStorage.setItem("exercise_cart", JSON.stringify(exercise_arr))
    let cart = JSON.parse(localStorage.getItem("exercise_cart"))
    exercise_out = ""
        for (i in cart){
            exercise_out += `<tr class = "table_row input_content" id = "${cart[i].name}">
                    <td style = "padding-right:2px; padding-left:0"><img src =${cart[i].img} /></td>
                    <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                    <td>${cart[i].cal} cal</td>
                    <td>${cart[i].protein}</td>
                    <td><button onclick = "deleteExerciseItem(${data[i].id},${cart[i].name})" class = "close_btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                    </tr>`
                 }        
    document.getElementById("exercise_table").innerHTML = exercise_out
}

function exercise_list_item(){
    let cart = JSON.parse(localStorage.getItem("exercise_cart"))
  
    for (i in cart){
        lunch_arr.push(cart[i])
    }
    
    if (cart != null || cart == "[]"){
        document.getElementById("exercise_table").style.display = "block"
        document.getElementById("exercise_para").style.display = "none"
    }
    for (i in cart){
            exercise_out += `<tr class = "table_row input_content">
                    <td style = "padding-right:2px; padding-left:0"><img src =${cart[i].img} /></td>
                    <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                    <td>${cart[i].cal} cal</td>
                    <td>${cart[i].protein} g</td>
                    <td><button onclick = "deleteExerciseItem(${cart[i].id})" class = "close_btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                    </tr>`
                 }        
    document.getElementById("exercise_table").innerHTML = exercise_out
}
exercise_list_item()

function deleteExerciseItem(id){
    let cart = JSON.parse(localStorage.getItem("exercise_cart"))
    cart.splice(id,1)
    localStorage.removeItem("exercise_cart")
    localStorage.setItem("exercise_cart",JSON.stringify(cart))
    location.reload()
}


document.getElementById("search_exercise").addEventListener("click", function(){
    let value = document.getElementById("input_breakfast").value
    let cart = JSON.parse(localStorage.getItem("exercises"))
    let search_data = ""
    for (i in cart){
        if(value.toLowerCase() == cart[i].name.toLowerCase()){
             search_data = ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                        <td>${cart[i].cal} cal</td>
                        <td>${cart[i].protein}</td>
                        <td><button onclick = addExercise(${data[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`        
            break;
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data
})

document.getElementById("enter_exercise").addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        popup.style.display = "block"
    let value = document.getElementById("enter_exercise").value
    let cart = JSON.parse(localStorage.getItem("exercises"))
    let search_data = ""
    for (i in cart){
        if(value.toLowerCase() == cart[i].name.toLowerCase()){
             search_data = ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${cart[i].name}</td>
                        <td>${cart[i].cal} cal</td>
                        <td>${cart[i].protein}</td>
                        <td><button onclick = addExercise(${cart[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`     
             break;   
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data

    }
})


