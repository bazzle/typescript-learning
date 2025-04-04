"use strict";
function Drink(name, alcoholic, basePrice) {
    this.name = name;
    this.alcoholic = alcoholic;
    this.basePrice = basePrice;
}
const camboucha = new Drink('camboucha', false, 4);
const aperolSpritz = new Drink('Aperol Spritz', true, 7);
const gameScores = [23, 21, 33, 21, 10];
const favouriteThings = ['raindrops on roses', 'whiskers on kittens', 'bright cooper kettles', 'warm woolen mittens'];
const voters = [{ name: "Alice", age: 32 }, { name: "Bob", age: 53 }];
function getLastItem(array) {
    return array[array.length - 1];
}
console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));
let nextUserId = 1;
const users = [
    { id: nextUserId++, username: "Dave", role: "member" },
    { id: nextUserId++, username: "Dan", role: "admin" }
];
function fetchUserDetails(username) {
    const user = users.find(item => item.username === username);
    if (!user) {
        throw new Error(`User with username ${username} not found`);
    }
    return user;
}
function updateUser(id, updates) {
    const user = users.find(item => item.id === id);
    if (!user) {
        console.error("User not found!");
        return;
    }
    Object.assign(user, updates);
}
function addNewUser(newUser) {
    const user = Object.assign({ 'id': nextUserId++ }, newUser);
    users.push(user);
    return user;
}
addNewUser({ username: 'Dave', role: 'member' });
updateUser(1, { username: 'Bill' });
updateUser(2, { role: 'super-admin' });
console.log(users);
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
let pizzaId = 0;
const menu = [
    { name: "Margherita", price: 8, id: pizzaId++ },
    { name: "Peperoni", price: 10, id: pizzaId++ },
    { name: "Hawaiian", price: 10, id: pizzaId++ },
    { name: "Veggie", price: 9, id: pizzaId++ }
];
let cashInRegister = 100;
let orderQueue = [];
let nextOrderId = 1;
const addNewPizza = (pizza) => {
    menu.push(pizza);
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
addNewPizza({ name: "Mexican", price: 12 });
addNewPizza({ name: "Americano", price: 12 });
addNewPizza({ name: "BBQ", price: 12 });
placeOrder('Veggie');
placeOrder('Hawaiian');
placeOrder('Margherita');
completeOrder(1);
