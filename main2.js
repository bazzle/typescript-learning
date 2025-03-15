const menu = [
	{ name: "Margharita", price: 8 },
	{ name: "Peperoni", price: 10 },
	{ name: "Hawaiian", price: 10 },
	{ name: "Veggie", price: 9 }
]

const order = (pizzaName) => {
	orderedItem = menu.find( item => item.name === pizzaName );
	return `${orderedItem.name} £${orderedItem.price}`
}

console.log(order('Veggie'));