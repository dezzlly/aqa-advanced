// task 3.1
const number = 5;

for(let i = 1; i < 11; i++) {
    const result = number * i
    console.log(`'For' loop: Result multiply ${number} * ${i} is ${result}`)
}


// task 3.2
let secondNumber = 1
while(secondNumber < 11) {
    const result = number * secondNumber
    console.log(`'While' loop: Result multiply ${number} * ${secondNumber} is ${result}`)
    secondNumber++
}