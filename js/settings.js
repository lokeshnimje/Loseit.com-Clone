
let arr;
document.getElementById("my_foods_btn").addEventListener("click", displayFoodItems)

//my food 
// button
const my_food_btn = document.getElementById("my_foods_btn")
// div
const my_food_divs = document.getElementById("my_food_div")

// my exercise
// button
const my_exercise_btn = document.getElementById("my_exercise")
// div
const my_exercise_divs = document.getElementById("my_exercise_div")

// Custom food
// button
const custom_foods_btn = document.getElementById("My_custom_foods") 
// div
const custom_foods_divs = document.getElementById("costum_food")

// Custom exercise
// Button
const custom_exercise_btn = document.getElementById("My_custom_exercise")
// Divs
const custom_exercise_divs = document.getElementById("costum_exercises")

custom_exercise_divs.style.display = "none"
custom_exercise_btn.style.background = "transparent"
custom_exercise_btn.style.color = "black"

function displayFoodItems(){
    my_exercise_divs.style.display = "none"
    my_exercise_btn.style.background = "transparent"
    my_exercise_btn.style.color = "black"

    my_food_divs.style.display = "block"
    my_food_btn.style.background = "#1A76C0"
    my_food_btn.style.color = "white"

    custom_foods_divs.display = "none"
    custom_foods_btn.style.background = "transparent"
    custom_foods_btn.style.color = "black"

    custom_exercise_divs.style.display = "none"
    custom_exercise_btn.style.background = "transparent"
    custom_exercise_btn.style.color = "black"

    arr = []
    let breakfast = JSON.parse(localStorage.getItem("breakfast_cart"))
    let lunch = JSON.parse(localStorage.getItem("lunch_cart"))
    let dinner = JSON.parse(localStorage.getItem("dinner_cart"))
    for (i in breakfast){
        arr.push(breakfast[i])
    }
    for(i in lunch){
        arr.push(lunch[i])
    }
    for (i in dinner){
        arr.push(dinner[i])
    }
    if(arr.length != 0){
        document.getElementById("my_food_table").style.display = "block"
        document.getElementById("my_foods_para").style.display = "none"
    let str = "";
    let calories;
    for (i in arr){
        calories = arr[i].calories;
        if(calories == undefined){
            calories = arr[i.cal]
        }
               str += ` <tr class = "table_row">
                        <td style = "padding-right:10px; padding-left:8px"><input type="checkbox" id="${i}" onclick = calc(${i})></input></td>
                        <td style = "padding-right:2px; padding-left:6px;"><img src =${arr[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${arr[i].name}</td>
                        <td >${calories}cal</td>
                        <td>${arr[i].protein} g</td>
                        </tr>`  
    }
    document.getElementById("my_food_table").innerHTML = str
} 
}
    let update_arr = []

    function calc(id){
        let breakfast = JSON.parse(localStorage.getItem("breakfast_cart"))
        let lunch = JSON.parse(localStorage.getItem("lunch_cart"))
        let dinner = JSON.parse(localStorage.getItem("dinner_cart"))
        for (i in breakfast){
          if(breakfast[i].name == arr[id].name){
              breakfast.splice(i,1)
          }
        }
        for (i in lunch){
            if(lunch[i].name == arr[id].name){
                lunch.splice(i,1)
            }
          }
          for (i in dinner){
            if(dinner[i].name == arr[id].name){
                dinner.splice(i,1)
            }
          }
          localStorage.setItem("breakfast_cart", JSON.stringify(breakfast))
          localStorage.setItem("lunch_cart", JSON.stringify(lunch))
          localStorage.setItem("dinner_cart", JSON.stringify(dinner))
    }

    document.getElementById("remove_all").addEventListener("click", function(){
        document.getElementById("my_food_table").innerHTML = ""
        displayFoodItems()
    })

    document.getElementById("select_all_food").addEventListener("click", function(){
        localStorage.removeItem("breakfast_cart")
        localStorage.removeItem("lunch_cart")
        localStorage.removeItem("dinner_cart")
    })

    function string_sort(str) { 
        var i = 0, j; 
        while (i < str.length) { 
            j = i + 1; 
            while (j < str.length) { 
                if (str[j].name.toUpperCase()[0] < str[i].name.toUpperCase()[0]) { 
                    var temp = str[i]; 
                    str[i] = str[j]; 
                    str[j] = temp; 
                } 
                j++; 
            } 
            i++; 
        } 
    } 

    document.getElementById("sort_all").addEventListener("click", function(){
        const sorted = string_sort(arr)
        let new_arr = arr
        document.getElementById("my_food_table").innerHTML = ""
        let str = "";
        let calories;
        for (i in new_arr){
        calories = new_arr[i].calories;
        if(calories == undefined){
            calories = new_arr[i].cal
        }
               str += ` <tr class = "table_row">
                        <td style = "padding-right:10px; padding-left:8px"><input type="checkbox" id="${i}" onclick = calc(${i})></input></td>
                        <td style = "padding-right:2px; padding-left:6px;"><img src =${new_arr[i].img} /></td>
                        <td style = "padding-left:0; color:#114d82" >${new_arr[i].name}</td>
                        <td >${calories}cal</td>
                        <td>${arr[i].protein}g</td>
                        </tr>`  
    }
    document.getElementById("my_food_table").innerHTML = str
    })

    // My Exercises
    let exer;
    document.getElementById("my_exercise").addEventListener("click", displayExercise)
    
        function displayExercise(){
        custom_foods_divs.style.display = "none"
        custom_foods_btn.style.background = "transparent"
        custom_foods_btn.style.color = "black"

        my_exercise_divs.style.display = "block"
        my_exercise_btn.style.background = "#1A76C0"
        my_exercise_btn.style.color = "white"

        my_food_divs.style.display = "none"
        my_food_btn.style.background = "transparent"
        my_food_btn.style.color = "black"

        custom_exercise_divs.style.display = "none"
        custom_exercise_btn.style.background = "transparent"
        custom_exercise_btn.style.color = "black"
        
        exer = []
        let cart = JSON.parse(localStorage.getItem("exercise_cart"))
        for (i in cart){
            exer.push(cart[i])
        }
        if(exer.length != 0){
            document.getElementById("my_exercise_table").style.display = "block"
            document.getElementById("my_exercise_para").style.display = "none"
        let str = "";
        for (i in exer){
                   str += ` <tr class = "table_row">
                            <td style = "padding-right:10px; padding-left:8px"><input type="checkbox" id="${i}" onclick = delExer(${i})></input></td>
                            <td style = "padding-right:2px; padding-left:6px;"><img src =${exer[i].img} /></td>
                            <td style = "padding-left:0; color:#114d82" >${exer[i].name}</td>
                            <td >${exer[i].cal}cal</td>
                            <td>${exer[i].protein}</td>
                            </tr>`  
        }
        document.getElementById("my_exercise_table").innerHTML = str
    } 
    }

    function delExer(id){
        let exercise = JSON.parse(localStorage.getItem("exercise_cart"))
        for (i in exercise){
          if(exercise[i].name == exer[id].name){
              exercise.splice(i,1)
              break;
          }
        }
          localStorage.setItem("exercise_cart", JSON.stringify(exercise))
    }

    document.getElementById("remove_exercise").addEventListener("click", function(){
        document.getElementById("my_exercise_table").innerHTML = ""
        displayExercise()
    })

    document.getElementById("remove_all_exercise").addEventListener("click", function(){
        localStorage.removeItem("exercise_list")

    })

    document.getElementById("sort_exercise").addEventListener("click", function(){
        const sorted_exercise = string_sort(exer)
        let new_exer = exer
        document.getElementById("my_exercise_table").innerHTML
        let str = "";
        for (i in new_exer){
                   str += ` <tr class = "table_row">
                            <td style = "padding-right:10px; padding-left:8px"><input type="checkbox" id="${i}" onclick = delExer(${i})></input></td>
                            <td style = "padding-right:2px; padding-left:6px;"><img src =${new_exer[i].img} /></td>
                            <td style = "padding-left:0; color:#114d82" >${new_exer[i].name}</td>
                            <td >${new_exer[i].cal}cal</td>
                            <td>${new_exer[i].protein}</td>
                            </tr>`  
        }
        document.getElementById("my_exercise_table").innerHTML = str
    })

/// Custom Foods

document.getElementById("My_custom_foods").addEventListener("click", createCustomFood)

function createCustomFood(){
    console.log("working")
    custom_foods_divs.style.display = "block"
    custom_foods_btn.style.background = "#1A76C0"
    custom_foods_btn.style.color = "white"

    my_food_divs.style.display = "none"
    my_food_btn.style.background = "transparent"
    my_food_btn.style.color = "black"

    my_exercise_divs.style.display = "none"
    my_exercise_btn.style.background = "transparent"
    my_exercise_btn.style.color = "black"

    custom_exercise_divs.style.display = "none"
    custom_exercise_btn.style.background = "transparent"
    custom_exercise_btn.style.color = "black"
}

document.getElementById("new_food_tab").addEventListener("click", function(){
    document.getElementById("pop_up_food").style.display = "block"
})

document.getElementById("cross").addEventListener("click", function(){
    document.getElementById("pop_up_food").style.display = "none"
})

document.getElementById("submit_food").addEventListener("click", function(){
    document.getElementById("pop_up_food").style.display = "none"
})

document.getElementById("cross_exe").addEventListener("click", function(){
    document.getElementById("pop_up_exercise").style.display = "none"
})
document.getElementById("submit_exercise").addEventListener("click", function(){
    document.getElementById("pop_up_exercise").style.display = "none"
})

// Custom Exercise

custom_exercise_btn.addEventListener("click", function(){
    custom_exercise_divs.style.display = "block"
    custom_exercise_btn.style.background = "#1A76C0"
    custom_exercise_btn.style.color = "white"

    my_food_divs.style.display = "none"
    my_food_btn.style.background = "transparent"
    my_food_btn.style.color = "black"

    my_exercise_divs.style.display = "none"
    my_exercise_btn.style.background = "transparent"
    my_exercise_btn.style.color = "black"

    custom_foods_divs.style.display = "none"
    custom_foods_btn.style.background = "transparent"
    custom_foods_btn.style.color = "black"
})

document.getElementById("new_exercise_tab").addEventListener("click", function(){
    document.getElementById("pop_up_exercise").style.display = "block"
})
