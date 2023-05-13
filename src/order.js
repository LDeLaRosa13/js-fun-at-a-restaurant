function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(order)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for( var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(deliveryOrders) {
  var items = [];
  for ( var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  }
    var stringItems = items.join(', ')
    return stringItems
  }

  function searchOrder(deliveryOrders, itemName) {
    for ( var i = 0; i < deliveryOrders.length; i ++) {
      if(deliveryOrders[i].item.includes(itemName)) {
        return true
      }
    }
    return false
  }

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}