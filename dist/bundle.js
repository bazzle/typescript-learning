// Explicit typing
let myName = "Barry";
let numberOfHeads = 1;
let isHuman = false;
console.log('hi');
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Peperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }
];
let cashInRegister = 100;
let orderQueue = [];
let nextOrderId = 1;
const addNewPizza = (newPizza) => {
    menu.push(newPizza);
};
const placeOrder = (pizzaName) => {
    const orderedPizza = menu.find(item => item.name === pizzaName);
    if (!orderedPizza) {
        console.log('cant find that pizza name');
        return;
    }
    cashInRegister += orderedPizza.price;
    // nextOrderId++ sets the order ID, then increments it
    const order = { orderItem: orderedPizza.name, status: 'ordered', orderId: nextOrderId++ };
    orderQueue.push(order);
    return order;
};
const completeOrder = (orderId) => {
    const order = orderQueue.find(item => item.orderId === orderId);
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
