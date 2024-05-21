// function declaration
function calculateRectangleArea (width, height) {
    return width * height
}

// function expression
const calculateRectangleArea1 = function (width, height) {
    return width * height
}

// arrow function
const calculateRectangleArea2 = (width, height) => width * height


console.log(calculateRectangleArea(5, 7))
console.log(calculateRectangleArea1(5, 7))
console.log(calculateRectangleArea2(5, 7))