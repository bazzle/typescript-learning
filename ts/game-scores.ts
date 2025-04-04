const gameScores = [23, 21, 33, 21, 10]
const favouriteThings = ['raindrops on roses', 'whiskers on kittens', 'bright cooper kettles', 'warm woolen mittens']
const voters = [{name: "Alice", age: 32}, {name: "Bob", age: 53}]

// function getLastItem(array: any){
// 	return array[array.length - 1]
// }

function getLastItem<PlaceholderType>(array: PlaceholderType[]): PlaceholderType | undefined{
	return array[array.length - 1]
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));