const car1 = {
	brand: 'BMW',
	model: 'X6',
	year: 2023,
};

const car2 = {
	brand: 'Audi',
	model: 'Q8',
	year: 2023,
};

const car3 = { ...car1, ...car2 };

console.log(car3);
