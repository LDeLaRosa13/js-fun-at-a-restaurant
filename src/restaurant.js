function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }

}

function addMenuItem(restaurant, meal) { 
  if (!restaurant.menus[meal.type].includes(meal)) {
    restaurant.menus[meal.type].push(meal)
  } 
}

function removeMenuItem(restaurant, itemName, menuType) {
  var menu = restaurant.menus[menuType];
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === itemName) {
        menu.splice(i, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`;
    }
  }
      return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
}
  function checkForFood(restaurant, foodItem) {
    var menu = restaurant.menus[foodItem.type];
    for (var i = 0; i < menu.length; i ++)
      if(menu[i].name === foodItem.name) {
      return `Yes, we're serving ${foodItem.name} today!`
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }

  



module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}