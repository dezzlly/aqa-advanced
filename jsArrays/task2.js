const numbers = [1, 2, 3, 4, 5];

const multiplynumbers = numbers.map((number) => number * numbers.indexOf(number));

console.log(multiplynumbers);
