        document.getElementById("weight_input").addEventListener("click", addWeight)
        document.getElementById("height_input").addEventListener("click", addHeight)
        document.getElementById("female").addEventListener("click", femaleData)
        document.getElementById("male").addEventListener("click", maleData)
        document.getElementById("birthday_input").addEventListener("click", addBirth)

        let input_box_one = document.getElementById("input_box_1")
        let input_box_two = document.getElementById("input_box_2")
        let input_box_three = document.getElementById("input_box_3")
        let input_box_four = document.getElementById("input_box_4")
        let heading = document.getElementById("heading")

        let cur_weight = document.getElementById("current_weight")
        let gol_weight = document.getElementById("goal_weight")
        let height = document.getElementById("height")
        let birthday = document.getElementById("birthday")

        const data = {}

        function addWeight(){
            let weight_one;
            let weight_two;

            if(current_units.value == "lb"){
                weight_one = cur_weight.value / 2.205
                data.weight = weight_one
            } else {
                data.weight = cur_weight.value
            }

            if(goal_units.value == "lb"){
                weight_two = gol_weight.value / 2.205
                data.desired_weight = weight_two
            } else {
                data.desired_weight = gol_weight.value
            }
            
            if(cur_weight.value == "" || gol_weight.value == ""){
                alert("Input feilds cannot be left empty.")
            } else {
                input_box_one.style.display = "none"
                heading.style.display = "none"
                input_box_two.style.display ="block"
            }
        }

        function addHeight(){

            if(height_units.value == "m"){
                data.height = height.value * 100
            } else {
                data.height = height.value
            }

            if(height.value == ""){
                alert("Input feilds cannot be left empty.")
            } else {
                input_box_two.style.display = "none"
                input_box_three.style.display = "block"
            }
        }

        function femaleData(){
            data.gender = "female"
            input_box_three.style.display = "none"
            input_box_four.style.display = "block"
        }

        function maleData(){
            data.gender = "male"
            input_box_three.style.display = "none"
            input_box_four.style.display = "block"
        }

        function addBirth(){
            let year = "";
            for (let i = 0; i < birthday.value.length; i++){
                if(i >= 6){
                    year = year + birthday.value[i]
                }
            }
            if(Number(year) > 1950 && Number(year) < 2021){
                data.birth_year = Number(year)
                getData()
            } else {
                alert("Please provide correct Date of birth")
            }
            
        }
        let output = {}
        function getData(){
            let calories = (data.weight - data.desired_weight) * 7700
            let weight_loss = data.weight - data.desired_weight;
            let current_calorie;
            if (data.gender == "female"){
                current_calorie = data.weight * 11 * .9 *2.204
            } else {
                current_calorie = data.weight * 11 * 2.204
            }
            let burn_calorie = 2100 - current_calorie;
            let days_required = Math.floor(calories / burn_calorie)
            output.calories = Math.floor(calories);
            output.current_calorie = Math.floor(current_calorie);
            output.days_required = days_required
            output.weight_loss = Math.floor(weight_loss)
            input_box_four.style.display ="none"

            div()
        }
        
        function div(){
            let url = "https://assets.loseit.com/website/onboarding/PlanWatermelon.svg"
            let div = document.createElement("div")
            div.setAttribute("class","input_box_5")

            let header = document.createElement("h2")
            header.innerHTML = "Your personal weight loss plan is ready."

            let child_div_one = document.createElement("div")
            child_div_one.setAttribute("class", "flex_box")
            let image_one = document.createElement("img")
            image_one.setAttribute("src", url)
            let div_one = document.createElement("div")
            let para_one = document.createElement("p")
            para_one.innerHTML = "Daily calorie budget:"
            let head_one = document.createElement("h2")
            head_one.innerHTML = output.current_calorie * .7
            div_one.appendChild(para_one)
            div_one.appendChild(head_one)
            child_div_one.appendChild(image_one)
            child_div_one.appendChild(div_one)
            


            let child_div_two = document.createElement("div")
            child_div_two.setAttribute("class", "flex_box")
            let image_two = document.createElement("img")
            image_two.setAttribute("src", "https://assets.loseit.com/website/onboarding/PlanAward.svg")
            let div_two = document.createElement("div")
            let para_two = document.createElement("p")
            para_two.innerHTML = "Total weight loss:"
            let head_two = document.createElement("h2")
            head_two.innerHTML = output.weight_loss + " " + "Kg"
            div_two.appendChild(para_two)
            div_two.appendChild(head_two)
            child_div_two.appendChild(image_two)
            child_div_two.appendChild(div_two)

            let child_div_three = document.createElement("div")
            child_div_three.setAttribute("class", "flex_box")
            let image_three = document.createElement("img")
            image_three.setAttribute("src", "https://assets.loseit.com/website/onboarding/PlanCalendar.svg")
            let div_three = document.createElement("div")
            let para_three = document.createElement("p")
            para_three.innerHTML = "Total calories loss:"
            let head_three = document.createElement("h2")
            head_three.innerHTML = output.calories
            div_three.appendChild(para_three)
            div_three.appendChild(head_three)
            child_div_three.appendChild(image_three)
            child_div_three.appendChild(div_three)

            let child_div_four = document.createElement("div")
            child_div_four.setAttribute("class", "flex_box")
            let image_four = document.createElement("img")
            image_four.setAttribute("src", "https://assets.loseit.com/website/onboarding/PlanStar.svg")
            let div_four = document.createElement("div")
            let para_four = document.createElement("p")
            para_four.innerHTML = "Time required:"
            let head_four = document.createElement("h2")
            head_four.innerHTML = output.days_required +" " + "Days"
            div_four.appendChild(para_four)
            div_four.appendChild(head_four)
            child_div_four.appendChild(image_four)
            child_div_four.appendChild(div_four)

            let btn = document.createElement("a")
            btn.innerHTML = "Home"
            btn.setAttribute("class", "btn_input")
            btn.setAttribute("href", "")

            div.appendChild(header)
            div.appendChild(child_div_one)
            div.appendChild(child_div_two)
            div.appendChild(child_div_three)
            div.appendChild(child_div_four)
            div.appendChild(btn)

            document.getElementById("main").appendChild(div)
        }   