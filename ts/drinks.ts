// Assigning custom type to object constructor

type DrinkType = {
	name: string,
	alcoholic: boolean,
	basePrice: number
}

// Object constructor parameters
function Drink(
	this: DrinkType,
	name: DrinkType['name'],
	alcoholic: DrinkType['alcoholic'],
	basePrice: DrinkType['basePrice']
)
{
    this.name = name;
    this.alcoholic = alcoholic;
    this.basePrice = basePrice;
}


const camboucha = new (Drink as any)('camboucha', false, 4);

const aperolSpritz = new (Drink as any)('Aperol Spritz', true, 7);