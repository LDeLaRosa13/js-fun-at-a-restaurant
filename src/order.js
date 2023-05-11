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
  var items = ' '
  for(var i = 0; i < deliveryOrders.length; i ++) {
    items += deliveryOrders[i].item + ', ';
    
  }
  return items
  }










module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}