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
  console.log(restaurant)
  console.log(meal)
  // if (restaurant.menus === meal.type) {
    return restaurant.menus.lunch.push(meal)
  }
//  } 



module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}