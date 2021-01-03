function callInput(){
    let break_obj = []
    let poha = {
    id: 0,
    name : "Poha",
    img : "https://d3hsih69yn4d89.cloudfront.net/web/D0D60B218ED1672F9235023F30C86D20.cache.png",
    calories : 74,
    protein : 2.5
}
let oats = {
    id: 1,
    name : "Oats",
    img : "https://d3hsih69yn4d89.cloudfront.net/web/626A75DEEB2C1D9D82A0A8EF5BD99120.cache.png",
    calories : 170,
    protein : 6
}
let idly = {
    id : 2,
    name : "Idly",
    img : "https://d3hsih69yn4d89.cloudfront.net/web/72FD1E613FB8593767A7CC272600E5EE.cache.png",
    calories : 108,
    protein : 1.9
}
let dosa = {
    id: 3,
    name : "Dosa",
    img : "https://d3hsih69yn4d89.cloudfront.net/web/59BB5546943F9723FB50DBAE4226D37A.cache.png",
    calories : 300,
    protein : 3
}
break_obj.push(poha)
break_obj.push(oats)
break_obj.push(idly)
break_obj.push(dosa)
localStorage.setItem("breakfasts", JSON.stringify(break_obj))
}
callInput()

function callLunch(){
    let lunch = []
   let rice = { 
    id: 0,
    name : "rice",
    img : "https://d3hsih69yn4d89.cloudfront.net/web/D0D60B218ED1672F9235023F30C86D20.cache.png",
    calories : 242,
    protein : 4.4
    }
    let chicken = {
        id: 1,
        name : "chicken",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/28B520FDFB32C696CB549D7BB95FCA55.cache.png",
        calories : 250,
        protein : 15.7
    }
    let fish = {
        id: 2,
        name : "fish",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/E752EDA55CE470683CF2D687109B3EE8.cache.png",
        calories : 127,
        protein : 21.7
    }
    let paneer = {
        id: 3,
        name : "paneer",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/D7D50D9A6681ADC75833A639BD12391F.cache.png",
        calories : 289,
        protein : 12.1
    }
    let dal = {
        id: 4,
        name : "dal",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/F2750E38D8987BBB5E401EC3E70616E9.cache.png",
        calories : 170,
        protein : 7
    }
    let chapati = {
        id: 5,
        name : "chapati",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/4848747399F762498B14B573671F3801.cache.png",
        calories : 90,
        protein : 3.5
    }
    let burger = {
        id: 6,
        name : "burger",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/C35355D4A0E666A6A36171624B6E1B62.cache.png",
        calories : 270,
        protein : 12
    }
    lunch.push(rice)
    lunch.push(chicken)
    lunch.push(fish)
    lunch.push(paneer)
    lunch.push(dal)
    lunch.push(chapati)
    lunch.push(burger)
localStorage.setItem("lunchs", JSON.stringify(lunch))
}
callLunch()

function callDinner(){
    let dinner = []
   let rice = { 
    id: 0,
    name : "rice",
    img : "https://d3hsih69yn4d89.cloudfront.net/web/D0D60B218ED1672F9235023F30C86D20.cache.png",
    calories : 242,
    protein : 4.4
    }
    let chicken = {
        id: 1,
        name : "chicken",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/28B520FDFB32C696CB549D7BB95FCA55.cache.png",
        calories : 250,
        protein : 15.7
    }
    let fish = {
        id: 2,
        name : "fish",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/E752EDA55CE470683CF2D687109B3EE8.cache.png",
        calories : 127,
        protein : 21.7
    }
    let paneer = {
        id: 3,
        name : "paneer",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/D7D50D9A6681ADC75833A639BD12391F.cache.png",
        calories : 289,
        protein : 12.1
    }
    let dal = {
        id: 4,
        name : "dal",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/F2750E38D8987BBB5E401EC3E70616E9.cache.png",
        calories : 170,
        protein : 7
    }
    let chapati = {
        id: 5,
        name : "chapati",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/4848747399F762498B14B573671F3801.cache.png",
        calories : 90,
        protein : 3.5
    }
    let burger = {
        id: 6,
        name : "burger",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/C35355D4A0E666A6A36171624B6E1B62.cache.png",
        calories : 270,
        protein : 12
    }
    dinner.push(rice)
    dinner.push(chicken)
    dinner.push(fish)
    dinner.push(paneer)
    dinner.push(dal)
    dinner.push(chapati)
    dinner.push(burger)
localStorage.setItem("dinner", JSON.stringify(dinner))
}
callDinner()

function callExercise(){
    let running = {
        id : 0,
        name : "Running",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/DB7664349E56D0621FAFCFDC2664C6DC.cache.png",
        cal : 257,
        protein : "30 mins",
    }
    let water_jogging = {
        id : 1,
        img : "https://d3hsih69yn4d89.cloudfront.net/web/E1DCA15330043D79727559E1A473C6A0.cache.png",
        name : "Water jogging",
        cal : 232,
        protein : "30 mins"
    }
    let pushup = {
        id : 2,
        name : "Pushups",
        img: "https://d3hsih69yn4d89.cloudfront.net/web/A18A712F646ACB8A9BA1B961616615ED.cache.png",
        cal : 213,
        protein: "30 mins"
    }
    let Bicycling = {
        id : 3,
        name : "Bicycling",
        img : "https://d3hsih69yn4d89.cloudfront.net/web/21ACFEF3DAF1A68C1C197BFF1FF8DADE.cache.png",
        cal : 543,
        protein : "30 mins"
    }
    let exer = []
    exer.push(running)
    exer.push(water_jogging)
    exer.push(pushup)
    exer.push(Bicycling)
localStorage.setItem("exercises", JSON.stringify(exer))
}
callExercise()



