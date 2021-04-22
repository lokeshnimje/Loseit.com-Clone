// comment box of right bottom part of home page
let activities = document.getElementById("activities");
let friends = document.getElementById("friends")
let challenges = document.getElementById("challenges");
let groups = document.getElementById("groups")

// display friends div on right bottom comment area
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
// display challanges div on right bottom comment area
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
// display Groups div on right bottom comment area
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

// working of comment box
showTask();

var addTaskInput = document.getElementById("textarea");
var addTaskButton = document.getElementById("share");

// adding comment and storing in local storage
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
    document.getElementById("share").style.display = "none"
    showTask();
});

// display show button on click of text area
document.getElementById("textarea").addEventListener("click", function(){
    document.getElementById("share").style.display = "block"
})

// show tasks after adding tasks
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

// delete tasks
function deletItem(index){
    var task = localStorage.getItem("localtask");
    var taskObj = JSON.parse(task);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();
}
// right side comment section ends here

// right day-week-nutrient result box;

let day = document.getElementById("my__day");
let week = document.getElementById("my__week");
let nutrient = document.getElementById("my__nutrients");

// my nuterient section
nutrient.addEventListener('click', nutrientdiv)
function nutrientdiv(e){
    e.preventDefault()
    my__day.style.color = "#51AADE"
    my__week.style.color = "#51AADE"
    my__nutrients.style.color = "#2C479B"
    right__data__result.style.display = "none" 
    nutrients.style.display = "block"
    right__data__week.style.display = "none"
}

// week section
week.addEventListener('click', weekdiv)
function weekdiv(e){
    e.preventDefault()
    my__day.style.color = "#51AADE"
    my__week.style.color = "#2C479B"
    my__nutrients.style.color = "#51AADE"
    right__data__result.style.display = "none" 
    nutrients.style.display = "none"
    right__data__week.style.display = "block"
}

// add food button 
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

// close pop up
document.getElementById("close").addEventListener("click", function(){
    popup.style.display = "none"
})

let table = document.getElementById("table")
let popup = document.getElementById("pop_up")

// breakfast list on add food button
document.getElementById("breakfast_list").addEventListener("click", function(){
    popup.style.display = "block"
    document.getElementById("find_all_breakfast").style.display = "block"
    document.getElementById("find_all_lunch").style.display = "none"
    document.getElementById("find_all_dinner").style.display = 'none'
    document.getElementById("search_breakfast").style.display = "block"
    document.getElementById("exer_menu").style.display = "none"
    document.getElementById("food_menu").style.display = "flex"
    document.getElementById("find_all_exercise").style.display = "none"
    document.getElementById("search_exercise").style.display = "none"
    table.innerHTML = ""
})

// lunch list on add food button
document.getElementById("lunch_list").addEventListener("click", function(){
    popup.style.display = "block"
    document.getElementById("find_all_lunch").style.display = "block"
    document.getElementById("find_all_dinner").style.display = 'none'
    document.getElementById("find_all_breakfast").style.display = 'none'
    document.getElementById("search_lunch").style.display = "block"
    document.getElementById("exer_menu").style.display = "none"
    document.getElementById("food_menu").style.display = "flex"
    document.getElementById("find_all_exercise").style.display = "none"
    document.getElementById("search_exercise").style.display = "none"
    table.innerHTML = ""
})

// Dinner list on add food button
document.getElementById("dinner_list").addEventListener("click", function(){
    popup.style.display = "block"
    document.getElementById("find_all_dinner").style.display = "block"
    document.getElementById("find_all_lunch").style.display = "none"
    document.getElementById("find_all_breakfast").style.display = 'none'
    document.getElementById("search_dinner").style.display = "block"
    document.getElementById("exer_menu").style.display = "none"
    document.getElementById("food_menu").style.display = "flex"
    document.getElementById("find_all_exercise").style.display = "none"
    document.getElementById("search_exercise").style.display = "none"
    table.innerHTML = ""
})

// for breakfast 
// find all breakfast button on breakfast list
document.getElementById("find_all_breakfast").addEventListener("click", addBreakfast)


let break_obj = []
// fetching breakfast item in pop up window from local storage 
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
    refreshPage()
}
let arr = []
let out = ""
// fetching breakfast items on dashboard
function breakfast_list_item(){
    let cart = JSON.parse(localStorage.getItem("breakfast_cart"))
    document.getElementById("breakfast_count").innerHTML =""
   
    
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
    refreshPage()
}
breakfast_list_item()

// adding breakfast from pop up
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
    refreshPage()
}

// deleting the breakfast item
function deleteItem(id){
    let cart = JSON.parse(localStorage.getItem("breakfast_cart"))
    cart.splice(id,1)
    localStorage.removeItem("breakfast_cart")
    localStorage.setItem("breakfast_cart",JSON.stringify(cart))
    location.reload()
}

// searching the breakfast 
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
         document.getElementById("input_breakfast").value = ""
         refreshPage()
})

// searching the breakfast item from dashboard on enter keypress
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
         document.getElementById("input_breakfast").value = ""

    }
    refreshPage()
})

// find all lunch button on pop up
document.getElementById("find_all_lunch").addEventListener("click", function(){
    let data = JSON.parse(localStorage.getItem("lunchs"))
    let lunch_data = ""
    for (i in data){
        lunch_data += ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${data[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${data[i].name}</td>
                        <td>${data[i].calories} cal</td>
                        <td>${data[i].protein} g</td>
                        <td><button onclick = addLunch(${data[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        ></tr>
                      `       
    }
    table.innerHTML = lunch_data
    refreshPage()
})

let lunch_item = []
let lunch_out = ""
// adding lunch from pop up
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
    lunch_item.push(list)

    localStorage.setItem("lunch_cart", JSON.stringify(lunch_item))
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
    refreshPage()
}
// display lunch on dashboard
function lunch_list_item(){
    let cart = JSON.parse(localStorage.getItem("lunch_cart"))
  
    for (i in cart){
        lunch_item.push(cart[i])
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
    refreshPage()
}
lunch_list_item()
 
// delete lunch item from dashboard
function deleteLunchItem(id){
    let cart = JSON.parse(localStorage.getItem("lunch_cart"))
    cart.splice(id,1)
    localStorage.removeItem("lunch_cart")
    localStorage.setItem("lunch_cart",JSON.stringify(cart))
    location.reload()
}

// search lunch from popup
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
                        <td><button onclick = addLunch(${cart[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`        
            break;
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data
         refreshPage()
})

// search lunch from dashbard on enter keypress
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
    refreshPage()
})

// js for dinner menu

// find all dinner button on dashboard
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
    refreshPage()
})

let dinner_arr = []
let dinner_out = ""

// add dinner from popup
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
    refreshPage()
}

// show dinner item on dashboard
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
    refreshPage()
}
dinner_list_item()

// delete dinner item from dashboard
function deleteDinnerItem(id){
    let cart = JSON.parse(localStorage.getItem("dinner_cart"))
    cart.splice(id,1)
    localStorage.removeItem("dinner_cart")
    localStorage.setItem("dinner_cart",JSON.stringify(cart))
    location.reload()
}

// search dinner from popup
document.getElementById("search_dinner").addEventListener("click", function(){
    let value = document.getElementById("input_breakfast").value
    let cart = JSON.parse(localStorage.getItem("dinner"))
    let search_data = ""
    for (i in cart){
        if(value.toLowerCase() == cart[i].name.toLowerCase()){
             search_data = ` <tr class = "table_row">
                        <td style = "padding-right:2px"><img src =${cart[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82;" >${cart[i].name}</td>
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
         refreshPage()
})

// search dinner from dashboard on enter keypress
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
    refreshPage()
})

// Exercise Button

document.getElementById("exercise_btn").addEventListener("click", function(){
    popup.style.display = "block"
    document.getElementById("find_all_breakfast").style.display = 'none'
    document.getElementById("find_all_lunch").style.display = "none"
    document.getElementById("find_all_dinner").style.display = "none"
    document.getElementById("exer_menu").style.display = "flex"
    document.getElementById("food_menu").style.display = "none"
    document.getElementById("find_all_exercise").style.display = "block"
    document.getElementById("search_exercise").style.display = "block"
    table.innerHTML = ""
})

// find all exercise button on popup
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
    refreshPage()
})

let exercise_arr = []
let exercise_out = ""

// add exercise from popup
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
    refreshPage()
}

// show exercise on dashboard
function exercise_list_item(){
    let cart = JSON.parse(localStorage.getItem("exercise_cart"))
  
    for (i in cart){
        exercise_arr.push(cart[i])
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
                    <td>${cart[i].protein} </td>
                    <td><button onclick = "deleteExerciseItem(${cart[i].id})" class = "close_btn"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                    </tr>`
                 }        
    document.getElementById("exercise_table").innerHTML = exercise_out
    refreshPage()
}
exercise_list_item()

// delete exercise from dashboard
function deleteExerciseItem(id){
    let cart = JSON.parse(localStorage.getItem("exercise_cart"))
    cart.splice(id,1)
    localStorage.removeItem("exercise_cart")
    localStorage.setItem("exercise_cart",JSON.stringify(cart))
    location.reload()
}

// search exercise from popup
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
                        <td><button onclick = addExercise(${cart[i].id}) class = "close_btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 
                        </tr>`        
            break;
        } else {
            search_data = "No search result found"
        }
        
    }
         table.innerHTML = search_data
         document.getElementById("input_breakfast").innerHTML = ""
         refreshPage()
         document.getElementById("input_breakfast").value = ""
})

// search exercise from dashboard on enter keypress
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
    refreshPage()
})

// data manipulation

let calorie_budget;
function refreshPage(){

// display count of breakfast item
function displayBreakfastCount(){
    let cart = JSON.parse(localStorage.getItem("breakfast_cart"))
    if(cart == null){
        document.getElementById("breakfast_count").innerHTML = `Breakfast: 0`
    } else {
        document.getElementById("breakfast_count").innerHTML = `Breakfast: ${cart.length}`
    }
}
displayBreakfastCount()
// display count of lunch item
function displayLunchCount(){
    let cart = JSON.parse(localStorage.getItem("lunch_cart"))
    if (cart == null){
        document.getElementById("lunch_count").innerHTML = `Lunch: 0`
    } else {
        document.getElementById("lunch_count").innerHTML = `Lunch: ${cart.length}`
    }
}
displayLunchCount()
// display count of dinner item
function displayDinnerCount(){
    let cart = JSON.parse(localStorage.getItem("dinner_cart"))
    if(cart == null){
        document.getElementById("dinner_count").innerHTML = `Dinner: 0`
    } else {
        document.getElementById("dinner_count").innerHTML = `Dinner: ${cart.length}`
    }
    
}
displayDinnerCount()

// display count exercise item
function displayExerciseCount(){
    let cart = JSON.parse(localStorage.getItem("exercise_cart"))
    if(cart == null){
        document.getElementById("exercise_count").innerHTML = `Exercise: 0`
    } else {
        document.getElementById("exercise_count").innerHTML = `Exercise: ${cart.length}`
    }
    
}
displayExerciseCount()

// display total calories
function totalCalories(){
    let sum = 0;
    let breakfast = JSON.parse(localStorage.getItem("breakfast_cart"))
    let lunch = JSON.parse(localStorage.getItem("lunch_cart"))
    let dinner = JSON.parse(localStorage.getItem("dinner_cart"))

    for (i in breakfast){
        sum += breakfast[i].calories
    }
    for (i in lunch){
        sum += lunch[i].calories
    }
    for (i in dinner){
        sum += dinner[i].calories
    }
    document.getElementById("total_cal").innerHTML = sum
    document.getElementById("calorie_consumed").innerHTML = sum
}
totalCalories()

// display total exercises
function totalExercise(){
    let diff = 0
    let cart = JSON.parse(localStorage.getItem("exercise_cart"))
    for (i in cart){
        diff += cart[i].cal
    }
    document.getElementById("total_exer").innerHTML = diff
    document.getElementById("calorie_loss").innerHTML = diff
}
totalExercise()

// display net count
function netCount(){
    let food = document.getElementById("total_cal").innerHTML
    let exercise = document.getElementById("total_exer").innerHTML
    document.getElementById("difference").innerHTML = food - exercise
    document.getElementById("net_calorie").innerHTML = food - exercise
}
netCount()
}


refreshPage()
// calorie budget on dashboard
function calorie(){
    let data = JSON.parse(localStorage.getItem("weight"))
    calorie_budget = data[0].current_calorie
    document.getElementById("calorie_paraa").innerHTML = calorie_budget
    document.getElementById("header__value__selected").innerHTML = calorie_budget
    document.getElementById("calorie_para").innerHTML = calorie_budget
}
calorie()

// reacord weight and compare with previous weights
document.getElementById("record_weight").addEventListener("click", function(){
    let weight = document.getElementById("weight").value
    let prev_weight = JSON.parse(localStorage.getItem("weight"))
    let differerce = weight - prev_weight[0].weight
    console.log(differerce)
    if(differerce >= 0){
        document.getElementById("show_weight").style.color = "red"
        document.getElementById("show_image").style.color = "red"
        document.getElementById("show_image").style.transform = "rotate(180deg)"
    }else{
        document.getElementById("show_weight").style.color = "#008000"
        document.getElementById("show_image").style.color = "#008000"
        document.getElementById("show_image").style.transform = "rotate(0deg)"
    }
    document.getElementById("show_weight").innerHTML = `${differerce.toFixed(2)} Kg`
    localStorage.setItem("weight",JSON.stringify(prev_weight))
    document.getElementById("weight").value = "";
})