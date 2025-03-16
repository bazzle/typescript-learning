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

const addNewPizza = (pizzaObj:Pizza) => {
	menu.push(pizzaObj)
}

const placeOrder = (pizzaName:string) => {
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

const completeOrder = (orderId: number) => {
	const order = orderQueue.find(item => item.orderId === orderId);
	if (!order){
		console.log('order not found');
		return
	}
	order.status = 'completed'
	return order
}


// Run stuff -------------------------------------

addNewPizza({name: "Mexican", price: 12, id: 5});

placeOrder('Veggie');
placeOrder('Hawaiian');
placeOrder('Margherita');
completeOrder(1);

console.log(orderQueue);
