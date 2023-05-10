function nameMenuItem(menuItem) {
  return `Delicious ${menuItem}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(topping, ingredients) {
  if(!ingredients.includes(topping)) {
    ingredients.push(topping)
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(oldPrice) {
  oldPrice *= .9
  return oldPrice
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


