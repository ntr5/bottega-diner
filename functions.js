alert(`
                Bottega Diner Menu
                       
    Main Dish: 
    Chicken ---------------------------------- $5.99
    Pork --------------------------------------- 6.69
    Steak ------------------------------------- $8.83
    Shrimp ----------------------------------- $9.73

    Sides:
    Salad ------------------------------------- $1.99
    Rice --------------------------------------- $2.87
    Potatoes --------------------------------- $2.93
    Vegetables ------------------------------ $3.43
    Maccaroni ------------------------------- $2.73
    Fries -------------------------------------- $2.98

`)

// dishes = dishes.toLowerCase()
const prices = {
    'pork': 6.69, 
    'chicken': 5.99, 
    'steak': 8.83,
    'shrimp': 9.73,
    'salad': 1.99, 
    'rice': 2.87, 
    'potatoes': 2.93, 
    'vegetables': 3.43, 
    'maccaroni': 2.73,
    'fries': 2.98
}
let price = 0
let total = 0
let count = 0
let keepRunning = false
let lowerCaseDish = ""
let upperCaseDish = ""
let toLowerCase = ""
let toUpperCase = ""
let discountPrice = 0
let float = 0
let side = ""
let dish = ""

// console.log(Object.keys(prices)[0])

dish = prompt(`Enter a dish`, 'Pork')
document.getElementsByClassName("dish").innerHTML = dish


const getDish = (dish) => {
    lowerCaseDish = dish.toLowerCase()
    upperCaseDish = dish[0].toUpperCase() + dish.slice(1)
    console.log(upperCaseDish)
    if (lowerCaseDish == Object.keys(prices)[0]) {
        price = prices.pork
        displayDishChoice(price)
    } else if (lowerCaseDish == 'chicken') {
        price = prices.chicken
        displayDishChoice(price)
    } else if (lowerCaseDish == 'steak') {
        price = prices.steak
        displayDishChoice(price)
    } else if (lowerCaseDish == 'shrimp') {
        price = prices.shrimp              
        displayDishChoice(price)
    } else {
        wrongDish()
    }

    return keepRunning
}

const displayDishChoice = (price) => {
    if (count < 1) {
        total += price
        console.log(price)
        alert(`${upperCaseDish} Excellent choice `)
        alert(`${upperCaseDish} is $${price}`)
    } else {
        price /= 2
        discountPrice = (Math.round(price * 100) / 100).toFixed(2)
        // discountPrice = (Math.round(price * 100) / 100).toPrecision(3)
        float = parseFloat(discountPrice)
        console.log(float)
        total += float
        total = parseFloat(total.toFixed(2))
        console.log(total)
        alert(`${upperCaseDish} Excellent choice `)
        alert(`${upperCaseDish} is $${float}`)
    }
    keepRunning = true
}

const wrongDish = () => {
    alert(`Sorry ${dish} is not on the menu.`)
    price = 0
    keepRunning = false
}

while(keepRunning == false) {
    keepRunning = getDish(dish)

    if (keepRunning == false) {
        alert(`Please click OK to chose a dish`)
        dish = prompt(`Enter a dish`, 'Pork')
        keepRunning = getDish(dish)
        count += 1
    } else {
        keepRunning = true
    }
    // console.log(count)
}

result = confirm("Click OK to Add another Dish for Half Price?")
if(result) {
    count++
    dish = prompt(`Enter a dish`, 'Pork')
    keepRunning = getDish(dish)
}


keepRunning = false
side = prompt('Pick 2 sides', 'Salad')


const getSide = (side) => {
    lowerCaseSide = side.toLowerCase()
    upperCaseSide = side[0].toUpperCase() + side.slice(1)
    console.log(upperCaseSide)
    if (lowerCaseSide == 'salad') {
        price = prices.salad
        displaySideChoice(price)
    } else if (lowerCaseSide == 'rice') {
        price = prices.rice
        displaySideChoice(price)
    } else if (lowerCaseSide == 'potatoes') {
        price = prices.potatoes
        displaySideChoice(price)
    } else if (lowerCaseSide == 'vegetables') {
        price = prices.vegetables
        displaySideChoice(price)
    } else if (lowerCaseSide == 'maccaroni') {
        price = prices.maccaroni
        displaySideChoice(price)
    } else if (lowerCaseSide == 'fries') {
        displaySideChoice(price)
    } else {
        wrongSide()
    }

    return keepRunning
}

const displaySideChoice = (price) => {
    total += price
    console.log(total)
    alert(`${upperCaseSide} Excellent choice `)
    alert(`${upperCaseSide} is $${price}`)
    keepRunning = true
}

const wrongSide = () => {
    alert(`Sorry ${side} is not on the menu.`)
    price = 0
    keepRunning = false
}


while(keepRunning == false) {
    keepRunning = getSide(side)

    if (keepRunning == false) {
        alert(`Please click OK to chose a side`)
        side = prompt('Pick 2 sides', 'Salad')
        keepRunning = getSide(side)
    } else {
        keepRunning = true
    }
}


keepRunning = false


side = prompt('Pick 1 more side', 'Salad')
keepRunning = getSide(side)


while(keepRunning == false) {
    keepRunning = getSide(side)

    if (keepRunning == false) {
        alert(`Please click OK to chose a side`)
        side = prompt('Pick 2 sides', 'Salad')
        keepRunning = getSide(side)
    } else {
        keepRunning = true
    }

    
}

alert(`You're total is ${total}`)
alert(`
  Thank you for Dining at Bottega!
            Have a nice Day!
`)