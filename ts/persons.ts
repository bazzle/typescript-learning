// Explicit typing ----------------------------
let myName: string = "Barry"
let numberOfHeads: number = 1
let isHuman: boolean = false

// custom types ----------------------------
type Pizzatype = string
const favePizza:Pizzatype = 'margherita'

// custom type objects ----------------------------

type PostalAddress = {
	street: string,
	city: string,
	country: string
}

// Make adding postalAddress optional
type Person = {
	name: string,
	age: number,
	isStudent: boolean,
	address: {
		street: string,
		city: string,
		country: string
	},
	postalAddress?: PostalAddress
}

// Persons -------------------------------------------

let person1:Person = {
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
}

let person2:Person = {
	name: "Jane",
	age: 32,
	isStudent: true,
	address: {
		street: '232 Street name',
		city: 'City name',
		country: 'Country name'
	}
}

// setting an array variable that takes "person" objects
let people: Person[] = [person1, person2]

// Do stuff --------------------------------------------------------

function displayInfo(person:Person) {
	return `${person.name}'s postal address is ${person.postalAddress?.street}`
}

// console.log( displayInfo(person1) );