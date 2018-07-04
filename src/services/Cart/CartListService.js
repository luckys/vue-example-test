export default {

  getAmount (items) {
    //return items.reduce((previousItem, item) => previousItem.price + item.price)
    let amount = 0.00
    items.forEach((item) => amount += item.price)
    return parseFloat(amount).toFixed(2)
  }
}
