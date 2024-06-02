const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

const countNumbers = (arr) => {
    let positiveCount = 0;
    let negativeCount  = 0;
    let zeroCount  = 0;

    for (const number of numbers) {
        if (number < 0) {
            negativeCount += 1
        }
        if (number === 0) {
            zeroCount += 1
        }
        if (number > 0) {
            positiveCount += 1
        }
        
    }

    console.log(`Кількість позитивних чисел: ${positiveCount}`)
    console.log(`Кількість негативних чисел: ${negativeCount}`)
    console.log(`Кількість нульових чисел: ${zeroCount}`)
}

countNumbers(numbers)