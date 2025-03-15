// Explicit typing
var myName = "Barry";
var numberOfHeads = 1;
var isHuman = false;
console.log('yey');
var menu = [
    { name: "Margherita", price: 8 },
    { name: "Peperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }
];
var cashInRegister = 100;
var orderQueue = [];
var nextOrderId = 1;
var addNewPizza = function (newPizza) {
    menu.push(newPizza);
};
var placeOrder = function (pizzaName) {
    var orderedPizza = menu.find(function (item) { return item.name === pizzaName; });
    if (!orderedPizza) {
        console.log('cant find that pizza name');
        return;
    }
    cashInRegister += orderedPizza.price;
    // nextOrderId++ sets the order ID, then increments it
    var order = { orderItem: orderedPizza.name, status: 'ordered', orderId: nextOrderId++ };
    orderQueue.push(order);
    return order;
};
var completeOrder = function (orderId) {
    var order = orderQueue.find(function (item) { return item.orderId === orderId; });
    if (!order) {
        console.log('order not found');
        return;
    }
    order.status = 'Completed';
    return order;
};
addNewPizza({ name: "Mexican", price: 12 });
placeOrder('Veggie');
placeOrder('Hawaiian');
placeOrder('Margherita');
completeOrder(1);
console.log(orderQueue);
