// Types -------------------------------------

type Pizza = {
	name: string,
	price: number,
	id: number
}

type Status = 'ordered' | 'completed'

type Order = {
	orderItem: Pizza,
	status: Status,
	orderId: number
}


// Variables -------------------------------------

const menu : Pizza[] = [
	{ name: "Margherita", price: 8, id: 1 },
	{ name: "Peperoni", price: 10, id: 2 },
	{ name: "Hawaiian", price: 10, id: 3 },
	{ name: "Veggie", price: 9, id: 4 }
]

let cashInRegister:number = 100
// Set an empty array called orderQueue, each item in the array is the Order custom type
let orderQueue:Order[] = []
let nextOrderId:number = 1


// Functions -------------------------------------

// void return type, means it doesn't return anything
const addNewPizza = (pizzaObj:Pizza): void => {
	menu.push(pizzaObj)
}

const placeOrder = (pizzaName:string): Order | undefined => {
	const orderedPizza = menu.find(item => item.name === pizzaName);
	if (!orderedPizza){
		console.log('cant find that pizza name');
		return
	}
	cashInRegister += orderedPizza.price;
	// nextOrderId++ sets the order ID, then increments it
	const order:Order = {
		orderItem: orderedPizza,
		status: 'ordered',
		orderId: nextOrderId++
	}
	orderQueue.push(order)
	return order;
}

const completeOrder = (orderId: number):Order | undefined => {
	const order:Order | undefined = orderQueue.find(item => item.orderId === orderId);
	if (!order){
		console.log('order not found');
		return
	}
	order.status = 'completed'
	return order
}

const getPizzaDetail = (identifier:string | number): Pizza | undefined => {
	let item
	if (typeof identifier === 'string'){
		item = menu.find(item => item.name.toLowerCase() === identifier.toLowerCase());
	} else if (typeof identifier === 'number'){
		item = menu.find(item => item.id === identifier);
	} else {
		throw new TypeError("Argument must be either a string or a number");
	}
	return item
	// if (item === undefined){
	// 	throw new Error('Cannot find pizza, please check');
	// } else {
	// 	return item
	// }
}


// Run stuff -------------------------------------

// console.log(getPizzaDetail(2));

addNewPizza({name: "Mexican", price: 12, id: 5});

placeOrder('Veggie');
placeOrder('Hawaiian');
placeOrder('Margherita');
completeOrder(1);

// console.log(orderQueue);
