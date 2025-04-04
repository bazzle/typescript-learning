// Types -------------------------------------

type UserRole = "guest" | "member" | "admin" | "super-admin"
type User = {
	id: number,
	username: string,
	role: UserRole
}
type UserNoId = Omit<User, "id">
type UpdatedUser = Partial<User>

let nextUserId = 1

// Variables / helpers -------------------------------------

const users: User[] = [
	{id: nextUserId++, username: "Dave", role: "member"},
	{id: nextUserId++, username: "Dan", role: "admin"}
]

// Functions -------------------------------------

function fetchUserDetails(username: string): User{
	const user = users.find(item => item.username === username)
	if(!user){
		throw new Error(`User with username ${username} not found`)
	}
	return user
}

function updateUser(id: number, updates: UpdatedUser){
	
	const user = users.find(item => item.id === id)
	if (!user){
		console.error("User not found!");
		return
	}
	Object.assign(user, updates)
}

function addNewUser(newUser: UserNoId){
	const user: User = {
		'id' : nextUserId++,
		... newUser
	}
	users.push(user)
	return user
}

// Run stuff -------------------------------------

addNewUser({username: 'Dave', role: 'member'})

updateUser(1, {username: 'Bill'})
updateUser(2, {role: 'super-admin'})

console.log(users)

let role: UserRole = 'member'

const userDetail = (identifier:"guest" | "member" | "admin") => {
	return identifier
}
