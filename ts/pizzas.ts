// Types -------------------------------------

type Pizza = {
	name: string,
	price: number,
	id?: number
}

type Status = 'ordered' | 'completed'

type Order = {
	orderItem: Pizza,
	status: Status,
	orderId: number
}


// Variables / helpers -------------------------------------

let pizzaId: number = 0

const menu : Pizza[] = [
	{ name: "Margherita", price: 8, id: pizzaId++ },
	{ name: "Peperoni", price: 10, id: pizzaId++ },
	{ name: "Hawaiian", price: 10, id: pizzaId++ },
	{ name: "Veggie", price: 9, id: pizzaId++ }
]

let cashInRegister:number = 100
// Set an empty array called orderQueue, each item in the array is the Order custom type
let orderQueue:Order[] = []
let nextOrderId:number = 1


// Functions -------------------------------------

// void return type, means it doesn't return anything
const addNewPizza = (pizza:Omit<Pizza, 'id'>): void => {
    menu.push(pizza);
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
// console.log(menu)

addNewPizza({name: "Mexican", price: 12});
addNewPizza({name: "Americano", price: 12});
addNewPizza({name: "BBQ", price: 12});

placeOrder('Veggie');
placeOrder('Hawaiian');
placeOrder('Margherita');
completeOrder(1);

// console.log(orderQueue);
