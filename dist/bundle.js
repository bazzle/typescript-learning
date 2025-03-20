"use strict";
function Drink(name, alcoholic, basePrice) {
    this.name = name;
    this.alcoholic = alcoholic;
    this.basePrice = basePrice;
}
const camboucha = new Drink('camboucha', false, 4);
const aperolSpritz = new Drink('Aperol Spritz', true, 7);
const users = [
    { username: "Dave", role: "member" },
    { username: "Dan", role: "admin" }
];
function fetchUserDetails(username) {
    const user = users.find(item => item.username === username);
    if (!user) {
        throw new Error(`User with username ${username} not found`);
    }
    return user;
}
let role = 'member';
const userDetail = (identifier) => {
    return identifier;
};
let myName = "Barry";
let numberOfHeads = 1;
let isHuman = false;
const favePizza = 'margherita';
let person1 = {
    name: "Adam",
    age: 41,
    isStudent: false,
    address: {
        street: '232 Street name',
        city: 'City name',
        country: 'Country name'
    },
    postalAddress: {
        street: '232 Street name',
        city: 'City name',
        country: 'Country name'
    }
};
let person2 = {
    name: "Jane",
    age: 32,
    isStudent: true,
    address: {
        street: '232 Street name',
        city: 'City name',
        country: 'Country name'
    }
};
let people = [person1, person2];
function displayInfo(person) {
    var _a;
    return `${person.name}'s postal address is ${(_a = person.postalAddress) === null || _a === void 0 ? void 0 : _a.street}`;
}
const menu = [
    { name: "Margherita", price: 8, id: 1 },
    { name: "Peperoni", price: 10, id: 2 },
    { name: "Hawaiian", price: 10, id: 3 },
    { name: "Veggie", price: 9, id: 4 }
];
let cashInRegister = 100;
let orderQueue = [];
let nextOrderId = 1;
const addNewPizza = (pizzaObj) => {
    menu.push(pizzaObj);
};
const placeOrder = (pizzaName) => {
    const orderedPizza = menu.find(item => item.name === pizzaName);
    if (!orderedPizza) {
        console.log('cant find that pizza name');
        return;
    }
    cashInRegister += orderedPizza.price;
    const order = {
        orderItem: orderedPizza,
        status: 'ordered',
        orderId: nextOrderId++
    };
    orderQueue.push(order);
    return order;
};
const completeOrder = (orderId) => {
    const order = orderQueue.find(item => item.orderId === orderId);
    if (!order) {
        console.log('order not found');
        return;
    }
    order.status = 'completed';
    return order;
};
const getPizzaDetail = (identifier) => {
    let item;
    if (typeof identifier === 'string') {
        item = menu.find(item => item.name.toLowerCase() === identifier.toLowerCase());
    }
    else if (typeof identifier === 'number') {
        item = menu.find(item => item.id === identifier);
    }
    else {
        throw new TypeError("Argument must be either a string or a number");
    }
    return item;
};
addNewPizza({ name: "Mexican", price: 12, id: 5 });
placeOrder('Veggie');
placeOrder('Hawaiian');
placeOrder('Margherita');
completeOrder(1);
