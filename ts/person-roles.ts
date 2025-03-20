type UserRole = "guest" | "member" | "admin"
type User = {
	username: string,
	role: UserRole
}

const users: User[] = [
	{username: "Dave", role: "member"},
	{username: "Dan", role: "admin"}
]

function fetchUserDetails(username: string): User{
	const user = users.find(item => item.username === username)
	if(!user){
		throw new Error(`User with username ${username} not found`)
	}
	return user
}

// console.log(fetchUserDetails('Daaa'));


let role: UserRole = 'member'

const userDetail = (identifier:"guest" | "member" | "admin") => {
	return identifier
}

// console.log(userDetail(role));