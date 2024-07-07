const users = [
	{ name: 'Jon', email: 'jon@gmail.com', age: 35 },
	{ name: 'Mia', email: 'mia@gmail.com', age: 33 },
	{ name: 'Taras', email: 'taras@gmail.com', age: 22 },
	{ name: 'Nicole', email: 'nicole@gmail.com', age: 38 },
	{ name: 'Aletta', email: 'aletta@gmail.com', age: 36 },
];

const checkUsers = function (users) {
	for (const { name, email, age } of users) {
		console.log(`First user: 
        ${name}
        ${email}
        ${age} `);
	}
};

checkUsers(users);
