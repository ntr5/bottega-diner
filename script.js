
alert(`
    Bottega Diner
                    Menu 
    Main Dish: 
    Chicken --------------------- $4.99
    Pork -------------------------- $5.99
    Steak ------------------------ $6.99

    Sides:
    Salad ------------------------ $1.99
    Rice -------------------------- $2.99
    Potatoes -------------------- $2.99
    Vegetables ----------------- $3.99
    Maccaroni ------------------ $2.99
    Fries -------------------------- $2.99

`)

// dishes = dishes.toLowerCase()
const prices = {
    'chicken': 4.99, 
    'pork': 5.99, 
    'steak': 6.99,
    'shrimp': 8.99,
    'salad': 1.99, 
    'rice': 2.99, 
    'potatoes': 2.99, 
    'vegetables': 3.99, 
    'maccaroni': 2.99,
    'fries': 2.99
}
let price = 0
let total = 0


let dish = prompt('Enter a dish', 'Pork')
document.getElementsByClassName("dish").innerHTML = dish


// if (dish != null) { 
//     document.getElementsByClassName("dish").innerHTML = dish
//     alert(`${dish} Excellent choice `)
// } 

switch (dish.toLowerCase()) {
  case 'pork':
      price = prices.pork
      total = price
      console.log(price)
      alert(`${dish} Excellent choice `)
      alert(`${dish} is $${price}`)
  break;
  case 'chicken':
    price = prices.chicken
    total = price
    alert(`${dish} Excellent choice `)
    alert(`${dish} is $${price}`)
  break;
  case 'steak':
    price = prices.steak
    total = price
    alert(`${dish} Excellent choice `)
    alert(`${dish} is $${price}`)
  break;
  case 'shrimp':
    price = prices.shrimp              
    total = price
    alert(`${dish} Excellent choice `)
    alert(`${dish} is $${price}`)
  break;
  default:
    alert(`${dish} is not on the menu.`)
    price = 0
    total = 0
}

let sides = prompt('Pick 2 sides', 'Salad')
switch (sides.toLowerCase()) {
  case 'salad':
      price = prices.salad
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'rice':
      price = prices.rice
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'potatoes':
      price = prices.potatoes
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'vegetables':
      price = prices.vegetables
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'maccaroni':
      price = prices.maccaroni
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'fries':
      price = prices.fries
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  default:
    alert(`${sides} is not on the menu.`)
    price = 0
    total = 0
}

sides = prompt('Pick 1 more side', 'Salad')
switch (sides.toLowerCase()) {
  case 'salad':
      price = prices.salad
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'rice':
      price = prices.rice
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'potatoes':
      price = prices.potatoes
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'vegetables':
      price = prices.vegetables
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'maccaroni':
      price = prices.maccaroni
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  case 'fries':
      price = prices.fries
      total += price
      console.log(total)
      alert(`${sides} Excellent choice `)
      alert(`${sides} is $${price}`)
  break;
  default:
    alert(`${sides} is not on the menu.`)
    price = 0
    total = 0
}

alert(`You're total is ${total}`)
alert(`
  Thank you for Dining at Bottega!
           Have a nice Day!
`)
